import type { InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";
import { grayColors, saColors } from "@swiss-activities/ui/tokens";

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  fontSize: 15,
  borderRadius: 8,
  border: `1px solid ${saColors.border}`,
  outline: "none",
  boxSizing: "border-box" as const,
  backgroundColor: "white",
};

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
  return <input {...props} style={{ ...inputStyle, ...props.style }} />;
}

export function Select({
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      style={{
        ...inputStyle,
        appearance: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236b7280'%3E%3Cpath fill-rule='evenodd' d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
        backgroundSize: "20px",
        paddingRight: 36,
        ...props.style,
      }}
    >
      {children}
    </select>
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
