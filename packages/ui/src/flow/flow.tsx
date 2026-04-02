import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { withFlowButtonSpacing } from "./flow.children";
import type { BaseFlowProps } from "./flow.types";
import { flowStyles } from "./flow.variants.web";

export type FlowProps = BaseFlowProps & HTMLAttributes<HTMLDivElement>;

export function Flow({ children = null, className, ...props }: FlowProps) {
  return (
    <div className={cn(flowStyles, className)} {...props}>
      {withFlowButtonSpacing(children)}
    </div>
  );
}
