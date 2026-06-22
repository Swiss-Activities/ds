import { TransportTrip } from "../../../types/transport";
import { cn } from "../../../utils/css/cn";

type CapacityProps = {
  className?: string;
  capacity?: TransportTrip["capacity"];
};

export const Capacity = ({ capacity, className }: CapacityProps) => {
  if (!capacity) return null;

  type Level = "low" | "medium" | "high";

  const levelToFilled = (level: Level) =>
    level === "low" ? 1 : level === "medium" ? 2 : level === "high" ? 3 : 0;

  const CapacityGlyph = ({
    size = 14,
    className,
  }: {
    size?: number;
    className?: string;
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
      focusable={false}
    >
      <path d="M376 88C376 57.1 350.9 32 320 32C289.1 32 264 57.1 264 88C264 118.9 289.1 144 320 144C350.9 144 376 118.9 376 88zM400 300.7L446.3 363.1C456.8 377.3 476.9 380.3 491.1 369.7C505.3 359.1 508.3 339.1 497.7 324.9L427.2 229.9C402 196 362.3 176 320 176C277.7 176 238 196 212.8 229.9L142.3 324.9C131.8 339.1 134.7 359.1 148.9 369.7C163.1 380.3 183.1 377.3 193.7 363.1L240 300.7L240 576C240 593.7 254.3 608 272 608C289.7 608 304 593.7 304 576L304 416C304 407.2 311.2 400 320 400C328.8 400 336 407.2 336 416L336 576C336 593.7 350.3 608 368 608C385.7 608 400 593.7 400 576L400 300.7z" />
    </svg>
  );

  const Meter = ({ label, level }: { label: string; level: Level }) => {
    const filled = levelToFilled(level);
    return (
      <div className="flex items-center gap-1 text-xs text-gray-600">
        <span className="w-3 text-end">{label}</span>
        <div className="flex items-center">
          {Array.from({ length: 3 }).map((_, idx) => (
            <CapacityGlyph
              key={idx}
              className={cn(
                idx < filled ? "text-gray-800" : "text-gray-300",
                "-ms-1"
              )}
              size={16}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Meter label="1." level={capacity["1st"]} />
      <Meter label="2." level={capacity["2nd"]} />
    </div>
  );
};
