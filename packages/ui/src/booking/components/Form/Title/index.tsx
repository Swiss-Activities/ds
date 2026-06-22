import { ReactNode } from "react";
import { I } from "../../I";
import { Text } from "@swiss-activities/ui";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../ui/Tooltip";
import { cn } from "../../../utils/css/cn";

type TitleProps = {
  className?: string;
  help?: string;
  required?: boolean;
  row?: boolean;
  showHelp?: boolean;
  title: string | ReactNode;
  type?: string;
};

export const Title = ({
  className = "",
  help = "",
  required = false,
  row = false,
  showHelp = true,
  title,
  type = "",
}: TitleProps) => {
  const renderTitle = () => {
    if (typeof title === "string") {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: required ? `${title} *` : title,
          }}
        />
      );
    }

    return (
      <>
        {title}
        {required && " *"}
      </>
    );
  };

  return (
    title && (
      <div className="flex flex-col sm:flex-row">
        <Text
          as="span"
          size="sm"
          className={cn(
            "!text-sm !text-gray-950 first-letter:uppercase",
            className,
            {
              "me-12 inline-block min-w-[150px]": row,
              "mb-0.5 me-auto": type !== "checkbox" && type !== "radio",
              "relative top-px !text-sm":
                type === "checkbox" || type === "radio",
            }
          )}
        >
          {renderTitle()}
        </Text>
        {help && (
          <>
            {showHelp && (
              <Text
                as="span"
                size="xs"
                className={cn("mt-1 sm:hidden", {
                  "mb-1": type === "radio",
                })}
              >
                {help}
              </Text>
            )}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative top-0.5 ms-auto hidden w-auto sm:block">
                  <I icon="circle-info" className="ms-2" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" align="start">
                {help && (
                  <Text as="span" size="xs2">
                    {help}
                  </Text>
                )}
              </TooltipContent>
            </Tooltip>
          </>
        )}
      </div>
    )
  );
};
