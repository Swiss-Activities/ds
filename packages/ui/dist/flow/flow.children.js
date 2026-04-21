import { Children, cloneElement, isValidElement, } from "react";
import { buttonComponentId } from "../button/button.types";
import { cn } from "../utils/cn";
import { sharedFlowButtonSpacingStyles } from "./flow.variants.shared";
export function withFlowButtonSpacing(children) {
    return Children.map(children, (child) => {
        if (!isValidElement(child)) {
            return child;
        }
        const element = child;
        const componentType = element.type;
        const mappedChildren = element.props.children == null
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
