import { ChangeEvent } from "react";
import { Button } from "@swiss-activities/ui";
import { Input } from "@swiss-activities/ui";
import { Phone } from "../Phone";
import { Text } from "@swiss-activities/ui";
import { useI18n } from "../../../utils/i18n/useI18n";

type RepeaterProps = {
  className?: string;
  fields: Array<{
    name: string;
    label: string;
    type?: string;
    required?: boolean;
  }>;
  onChange?: (items: any[]) => void;
  title: string;
  items: any[];
  setItems: (items: any[]) => void;
};

export const Repeater = ({
  className,
  fields,
  items,
  onChange,
  setItems,
  title,
}: RepeaterProps) => {
  const { t, locale } = useI18n();

  const addItem = () => {
    setItems([...items, {}]);
  };

  const removeItem = (indexToRemove: number) => {
    const newItems = [...items].filter((_, index) => index !== indexToRemove);
    setItems(newItems);
    if (onChange) {
      onChange(newItems);
    }
  };

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } },
    index: number
  ) => {
    const { name, value } = e.target;
    const newItems = [...items];
    newItems[index][name] = value;
    setItems(newItems);

    if (onChange) {
      onChange(newItems);
    }
  };

  return (
    <div className={className}>
      {title && (
        <Text as="h2" bold black>
          {title}
        </Text>
      )}
      <div>
        {items.map((_, index) => (
          <div
            key={index}
            className="mt-4 rounded-md border border-dashed border-gray-400 p-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {fields.map((field) => {
                const name = `${field.name}-${index}`;

                return field?.type === "phone" ? (
                  <Phone
                    index={`${index}`}
                    title={field.label}
                    key={field.name}
                    required={field.required}
                    onInput={(e) =>
                      handleChange(
                        {
                          target: {
                            name: field.name,
                            value: e as any,
                          },
                        },
                        index
                      )
                    }
                    value={items[index][field.name] || ""}
                  />
                ) : (
                  <Input
                    {...{ name }}
                    title={field.label}
                    key={field.name}
                    type={(field.type as any) || "text"}
                    value={items[index][field.name] || ""}
                    required={field.required}
                    onChange={(e) =>
                      handleChange(
                        {
                          target: {
                            name: field.name,
                            value: e.target.value,
                          },
                        },
                        index
                      )
                    }
                  />
                );
              })}
            </div>
            <Button
              className="mt-4 sm:mt-5"
              size="sm"
              onClick={() => removeItem(index)}
            >
              {t("Repeater.remove")}
            </Button>
          </div>
        ))}
      </div>
      <Button className="mt-4 w-full" onClick={addItem}>
        {t("Repeater.add")}
      </Button>
    </div>
  );
};
