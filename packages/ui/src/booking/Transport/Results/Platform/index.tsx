import { cn } from "../../../utils/css/cn";

type PlatformProps = {
  platform: string;
  inline?: boolean;
  className?: string;
};

export const Platform = ({ platform, inline, className }: PlatformProps) => {
  if (!platform || platform.endsWith(" ")) return null;

  return (
    <p
      className={cn(
        "whitespace-nowrap text-xs lg:text-sm",
        inline && "text-gray-600",
        className
      )}
    >
      {platform}
    </p>
  );
};
