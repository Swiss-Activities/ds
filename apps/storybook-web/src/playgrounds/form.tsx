import {
  Children,
  isValidElement,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactElement,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import {
  Input as BaseInput,
  Select as BaseSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@swiss-activities/ui";
import { grayColors, saColors } from "@swiss-activities/ui/tokens";

const labelStyle = {
  display: "block" as const,
  fontSize: 13,
  fontWeight: 500,
  color: grayColors[700],
  marginBottom: 6,
};

export function Field({
  label,
  htmlFor,
  children,
  style,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div style={style}>
      <label htmlFor={htmlFor} style={labelStyle}>
        {label}
      </label>
      {children}
    </div>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <BaseInput
      {...props}
      className="h-[42px] rounded-lg text-[15px]"
      style={{ ...props.style }}
    />
  );
}

export function Select({
  children,
  onChange,
  value,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  const options = Children.toArray(children).filter(
    (child): child is ReactElement<{ children?: ReactNode; value?: string }> =>
      isValidElement(child)
  );
  const selectedValue = String(value ?? props.defaultValue ?? "");
  const selectedOption = options.find(
    (option) => String(option.props.value) === selectedValue
  );

  return (
    <BaseSelect
      value={selectedValue}
      onValueChange={(nextValue) => {
        onChange?.({
          currentTarget: { value: String(nextValue) },
          target: { value: String(nextValue) },
        } as unknown as ChangeEvent<HTMLSelectElement>);
      }}
    >
      <SelectTrigger
        id={props.id}
        className="h-[42px] w-full rounded-lg px-3 text-[15px]"
        style={props.style}
      >
        <SelectValue>{selectedOption?.props.children}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={String(option.props.value)}
            value={String(option.props.value)}
          >
            {option.props.children}
          </SelectItem>
        ))}
      </SelectContent>
    </BaseSelect>
  );
}

export function SubmitButton({
  loading,
  children,
  onClick,
}: {
  loading: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      style={{
        padding: "10px 28px",
        fontSize: 15,
        fontWeight: 600,
        color: "white",
        backgroundColor: loading ? grayColors[300] : saColors.primary,
        border: "none",
        borderRadius: 8,
        cursor: loading ? "not-allowed" : "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}
