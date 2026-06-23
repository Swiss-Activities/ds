import { I } from "../components/I";
import { useSearchStore } from "../store/search";
import { Text } from "@swiss-activities/ui";
import { Button } from "@swiss-activities/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@swiss-activities/ui";
import { cn } from "../utils/css/cn";
import { useI18n } from "../utils/i18n/useI18n";
import { capitalizeFirstLetter } from "../utils/string/capitalizeFirstLetter";

export const Participants = () => {
  const { t } = useI18n();
  const [participants, setParticipants] = useSearchStore((state) => [
    state.participants,
    state.setParticipants,
  ]);

  const handleMinusChange = (type: "adults" | "children") => {
    setParticipants({
      ...participants,
      [type]: participants[type] - 1,
    });
  };

  const handlePlusChange = (type: "adults" | "children") => {
    setParticipants({
      ...participants,
      [type]: participants[type] + 1,
    });
  };

  return (
    <div className="space-y-4 divide-y divide-solid divide-gray-200">
      <Participant
        title={capitalizeFirstLetter(
          t("general.adults", {
            val: "",
          }).trim()
        )}
        subtitle={t("general.ageFrom", {
          val: 12,
        })}
        amount={`${participants.adults}`}
        onClickMinus={() => handleMinusChange("adults")}
        onClickPlus={() => handlePlusChange("adults")}
        minusDisabled={!participants.adults}
        plusDisabled={participants.adults === 99}
      />
      <Participant
        title={capitalizeFirstLetter(
          t("general.children", {
            val: "",
          }).trim()
        )}
        subtitle={t("general.ageUnder", {
          val: 12,
        })}
        amount={`${participants.children}`}
        padding
        onClickMinus={() => handleMinusChange("children")}
        onClickPlus={() => handlePlusChange("children")}
        minusDisabled={!participants.children}
        plusDisabled={participants.adults === 99}
      />
      {participants.children ? (
        <div className="grid grid-cols-2 gap-4 !border-0 pb-1">
          {Array.from({ length: participants.children }).map((_, i) => (
            <Child key={`child-${i}`} index={i} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

type ParticipantProps = {
  amount: string;
  minusDisabled: boolean;
  onClickMinus?: () => void;
  onClickPlus?: () => void;
  padding?: boolean;
  plusDisabled: boolean;
  price?: string;
  priceFrom?: boolean;
  subtitle: string;
  title: string | undefined;
  size?: "md" | "lg";
};

export const Participant = ({
  amount,
  minusDisabled,
  onClickMinus,
  onClickPlus,
  padding,
  plusDisabled,
  price,
  priceFrom,
  subtitle,
  title,
  size = "md",
}: ParticipantProps) => {
  const { t } = useI18n();

  return (
    <div
      className={cn(
        "grid w-full grid-cols-[1fr_auto] items-center border-l-0 border-r-0",
        {
          "pt-4": padding,
        }
      )}
    >
      <div>
        <Text
          size={size === "lg" ? "default" : "sm"}
          black
          className={cn({
            "font-medium": size === "lg",
          })}
        >
          {title}
        </Text>
        <Text
          size={size === "lg" ? "sm" : "xs"}
          className={cn({
            "!text-sm font-light !leading-normal": size === "lg",
          })}
        >
          {subtitle}
        </Text>
        {price && (
          <Text size="default" black bold className="mt-1">
            {priceFrom ? `${t("filter.card.from")} ${price}` : price}
          </Text>
        )}
      </div>
      <div className="grid grid-cols-[auto_20px_auto] items-center gap-4 [&_button]:rounded-full">
        <Button
          variant="outline-gray"
          size="icon"
          onClick={onClickMinus}
          disabled={minusDisabled}
          className="amount-subtract !h-10 !w-10 !min-h-[40px] !min-w-[40px] !p-0 bg-white disabled:!border-gray-200 disabled:!bg-white disabled:opacity-50"
        >
          <I icon="minus" />
        </Button>
        <Text gray className="text-center" size="sm2">
          {amount}
        </Text>
        <Button
          variant="outline-gray"
          size="icon"
          onClick={onClickPlus}
          disabled={plusDisabled}
          className="amount-add !h-10 !w-10 !min-h-[40px] !min-w-[40px] !p-0 bg-white disabled:!border-gray-200 disabled:!bg-white disabled:opacity-50"
        >
          <I icon="plus" />
        </Button>
      </div>
    </div>
  );
};

type ChildProps = {
  index: number;
};

const Child = ({ index }: ChildProps) => {
  const { t } = useI18n();
  const childrenAges = useSearchStore((state) => state.childrenAges);
  const setChildrenAges = useSearchStore((state) => state.setChildrenAges);

  return (
    <Select
      value={childrenAges[index]}
      onValueChange={(value) => {
        const copy = [...childrenAges];
        copy[index] = value as string;
        setChildrenAges(copy);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={t("general.ageChoose")} />
      </SelectTrigger>
      <SelectContent className="max-h-[220px]">
        {Array.from({ length: 12 }).map((_, i) => (
          <SelectItem key={`age-${i}`} value={`${i}`}>
            {t("general.ageOld", {
              val: i,
            })}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
