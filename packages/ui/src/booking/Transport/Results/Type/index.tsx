import { useState } from "react";
import type { TransportationType } from "../../../types/transport";
import { cn } from "../../../utils/css/cn";

type TypeProps = {
  className?: string;
  transportationType?: TransportationType;
};

export const Type = ({ className, transportationType }: TypeProps) => {
  const [lineIconError, setLineIconError] = useState(false);

  if (!transportationType) return null;

  const lineNumber = transportationType.lineNumbers?.[0];
  const shortName = transportationType.mode.shortName.toLowerCase();
  const name = lineNumber ? `${shortName}-${lineNumber}` : shortName;
  const displayName = name.toUpperCase().replace(/-/g, " ");

  const iconSrc =
    transportationType.mode.name === "Zug"
      ? "/assets/sbb/pictos/train-right.svg"
      : "/assets/sbb/pictos/bus-right.svg";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src={iconSrc}
        alt={transportationType.mode.name === "Zug" ? "Train" : "Bus"}
        className="h-5 w-5"
      />
      {lineIconError ? (
        <span className="text-sm font-medium">{displayName}</span>
      ) : (
        <img
          src={`/assets/sbb/icons/${name}.svg`}
          alt={name}
          className="h-5"
          onError={() => setLineIconError(true)}
        />
      )}
    </div>
  );
};
