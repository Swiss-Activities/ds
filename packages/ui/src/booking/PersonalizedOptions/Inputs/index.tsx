import { ChangeEvent, Fragment, useEffect } from "react";
import unset from "lodash/unset";
import {
  usePersonalizedOptions,
  validateValue,
  useGetDateToCheckPersonalizedOptions,
} from "../hooks";
import { sendTransportEvent } from "../../Transport/tracking";
import { useBookingStore } from "../../store";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";
import { Toast } from "../../components/Toast";
import { TOfferBooking } from "../../types/offerBooking";
import { TReservation } from "../../types/reservation";
import { useDebounce } from "../../utils/data/useDebounce";
import { useI18n } from "../../utils/i18n/useI18n";
import { dataLayerSend } from "../../utils/thirdParty/dataLayerSend";

type InputsProps = {
  index?: number;
  id: string;
  scope: string;
  ticketCategory?: TOfferBooking["ticketCategories"][number];
};

export const Inputs = ({ index, id, scope, ticketCategory }: InputsProps) => {
  const { t, locale } = useI18n();
  const {
    personalizedOptions,
    personalizedOptionsValues,
    setPersonalizedOptionsValues,
  } = usePersonalizedOptions();
  const datalayerDebounce = useDebounce(personalizedOptionsValues, 2000);
  const dateBooking = useGetDateToCheckPersonalizedOptions();

  const isTransport = !!useBookingStore.getState().reservation?.tripId;

  useEffect(() => {
    if (Object.keys(datalayerDebounce).length === 0) return;
    if (isTransport) {
      sendTransportEvent("transport_add_information_value");
    } else {
      dataLayerSend({ obj: { event: "add_information_value" } });
    }
  }, [datalayerDebounce]);

  const key = (item: { key: string | number }) =>
    index || index === 0
      ? personalizedOptionsValues?.[id]?.[index]?.[item.key]
      : personalizedOptionsValues?.[id]?.[item.key];

  const setValue = (
    id: string | number,
    key: any,
    value: any,
    remove?: string
  ) => {
    let data: {
      [x: string]: ArrayLike<unknown> | { [s: string]: unknown };
      reservation: TReservation;
    };

    if (index || index === 0) {
      data = {
        ...personalizedOptionsValues,
        [id]: {
          ...personalizedOptionsValues?.[id],
          [index]: {
            ...personalizedOptionsValues?.[id]?.[index],
            [key]: value,
          },
        },
      };
      if (remove) {
        unset((data[id] as { [s: string]: unknown })[index], remove);
      }
    } else {
      data = {
        ...personalizedOptionsValues,
        [id]: {
          ...personalizedOptionsValues?.[id],
          [key]: value,
        },
      };
      if (remove) {
        unset(data[id], remove);
      }
    }

    setPersonalizedOptionsValues(data);
  };

  const onChange = (
    id: string,
    key: string,
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    remove: string = ""
  ) => {
    const value = e.target.value;

    setValue(id, key, value, remove);
  };

  const onChangeDate = (e: string) => {
    const separator = locale === "de_CH" ? "." : "/";

    const checkValue = (str: string, max: number) => {
      if (str.charAt(0) !== "0" || str === "00") {
        let num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str =
          num > parseInt(max.toString().charAt(0)) &&
          num.toString().length === 1
            ? "0" + num
            : num.toString();
      }
      return str;
    };

    let input = e;
    input = input.replace(/\D/g, "");

    let day = input.substring(0, 2);
    let month = input.substring(2, 4);
    let year = input.substring(4, 8);

    if (day) day = checkValue(day, 31);
    if (month) month = checkValue(month, 12);

    let output = day;
    if (month) output += separator + month;
    if (year) output += separator + year;

    return output;
  };

  if (!personalizedOptions?.length) return null;

  return personalizedOptions
    .filter((e) => e.scope === scope)
    .map((item, index) => {
      if (item.type === "text" || item.type === "number")
        return (
          <Input
            key={item.key}
            name={item.key}
            onChange={(e) => onChange(id, item.key, e)}
            row
            title={item.label}
            value={key(item) || ""}
            type={item.type}
            {...(item.type === "number" && { min: 0 })}
          />
        );
      if (item.type === "date") {
        const date = key(item);
        const minAge = ticketCategory?.minAge;
        const maxAge = ticketCategory?.maxAge;

        const isDateValid = (dateStr: string) => {
          return validateValue().date(dateStr, dateBooking, minAge, maxAge);
        };

        return (
          <Fragment key={item.key}>
            <Input
              name={item.key}
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                e.target.value = onChangeDate(e.target.value);
                onChange(id, item.key, e);
              }}
              row
              title={item.label}
              type="text"
              errors={date ? !isDateValid(date) : false}
              placeholder={locale === "de_CH" ? "TT.MM.JJJJ" : "DD/MM/YYYY"}
              value={date || ""}
              keepPlaceholder
            />
            {date?.length === 10 ? (
              (minAge || maxAge) && !isDateValid(date) ? (
                <Toast warning text={t("general.wrongDateParticipant")} />
              ) : (
                !validateValue().date(date, dateBooking as string) && (
                  <Toast warning text={t("general.wrongDate")} />
                )
              )
            ) : null}
          </Fragment>
        );
      }
      if (item.type === "option") {
        let selected = key(item);

        if (selected && !item?.options.find((e: any) => e.key === selected)) {
          selected = undefined;
        }

        const hasCondition = item?.options.every((e) => e.condition);
        const conditionId = Object.keys(item?.options[0]?.condition || {})?.[0];
        const conditionLabel = personalizedOptions?.find(
          (e) => e.key === conditionId
        )?.label;
        const selectedCondition =
          personalizedOptionsValues?.reservation?.[conditionId];

        const filteredOptions = item.options
          .filter((e) =>
            e?.condition
              ? e.condition[conditionId]
                  .map((c: number) => `${c}`)
                  .includes(`${selectedCondition}`)
              : true
          )
          .filter((e) => e.label)
          .sort((a, b) => {
            if (
              a?.optionAttributes?.sortOrder &&
              b?.optionAttributes?.sortOrder
            ) {
              return (
                a.optionAttributes.sortOrder - b.optionAttributes.sortOrder
              );
            }
            return a.label.localeCompare(b.label);
          })
          .map((e) => ({
            value: e.key,
            label: e.label,
            description: e.optionAttributes?.description,
          }));

        if (
          hasCondition &&
          selectedCondition &&
          !filteredOptions.find((e) => e.value === selected)
        ) {
          selected = undefined;
        }

        const childCondition = item.options
          ? personalizedOptions
              ?.filter(
                (e) =>
                  e?.options
                    ?.map((opt) => opt?.condition)
                    .flat()
                    .filter((c) => c).length >= 1
              )
              .find((e) => {
                const opt = e?.options?.map((opt) => opt?.condition).flat();

                return Object.values(opt).find((e) => e?.[item.key]);
              })
          : false;

        const renderDrawer = filteredOptions.some((e) => e?.description);

        return (
          <div key={`${item.key}-${index}`} className="relative">
            <Select
              check
              className="w-full"
              onChange={(e) =>
                onChange(
                  id,
                  item.key,
                  e,
                  childCondition ? childCondition.key : ""
                )
              }
              options={[
                {
                  value: "",
                  label:
                    hasCondition && !selectedCondition
                      ? t("general.pleaseSelectItem", {
                          val: conditionLabel || "",
                        })
                      : t("general.pleaseSelect"),
                  disabled: true,
                },
                ...(hasCondition && !selectedCondition ? [] : filteredOptions),
              ]}
              title={item.label}
              selected={selected}
              drawer={renderDrawer ? "mobile" : undefined}
              advanced="desktop"
              unsorted
            />
          </div>
        );
      }
    });
};
