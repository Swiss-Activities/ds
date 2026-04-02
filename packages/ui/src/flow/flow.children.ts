import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { buttonComponentId } from "../button/button.types";
import { cn } from "../utils/cn";
import { sharedFlowButtonSpacingStyles } from "./flow.variants.shared";

type FlowComponentType = { saComponent?: string };

export function withFlowButtonSpacing(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    const element = child as ReactElement<{
      className?: string;
      children?: ReactNode;
    }>;
    const componentType = element.type as FlowComponentType;
    const mappedChildren: ReactNode =
      element.props.children == null
        ? element.props.children
        : withFlowButtonSpacing(element.props.children);

    if (componentType.saComponent !== buttonComponentId) {
      if (mappedChildren === element.props.children) {
        return child;
      }

      return cloneElement(element, { children: mappedChildren });
    }

    return cloneElement(element, {
      className: cn(sharedFlowButtonSpacingStyles, element.props.className),
      children: mappedChildren,
    });
  });
}
