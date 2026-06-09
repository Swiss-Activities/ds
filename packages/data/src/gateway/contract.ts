import type {
  TGatewayActivityDetail,
  TGatewayDetail,
  TGatewayHome,
  TGatewayHomeItem,
  TGatewayHomeSection,
  TGatewayStaticSection,
} from "./types";

export const GATEWAY_HOME_CONTRACT_VERSION = "gateway-home-v1";
export const GATEWAY_DETAIL_CONTRACT_VERSION = "gateway-detail-v1";

const sectionComponents = new Set([
  "activity_grid",
  "carousel",
  "feature_band",
  "hero",
  "non_bookable_grid",
  "region_map",
  "weather_card",
]);

const staticSectionComponents = new Set(["filters", "hero"]);
const itemTypes = new Set([
  "activity",
  "blog-post",
  "non-bookable",
  "non-bookable-event",
  "point-of-interest",
  "review",
]);
const filterGroupTypes = new Set(["checkbox", "dropdown", "radio"]);
const filterParams = new Set(["destination", "radiusKm", "tags"]);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const hasString = (value: Record<string, unknown>, key: string) =>
  typeof value[key] === "string" && value[key].length > 0;

const hasArray = (value: Record<string, unknown>, key: string) =>
  Array.isArray(value[key]);

const assertItemContract = (
  item: TGatewayHomeItem,
  path: string,
  errors: string[]
) => {
  const raw = item as Record<string, unknown>;

  if (!hasString(raw, "id")) {
    errors.push(`${path}.id must be a non-empty string`);
  }

  if (!hasString(raw, "title")) {
    errors.push(`${path}.title must be a non-empty string`);
  }

  if (!itemTypes.has(item.type)) {
    errors.push(`${path}.type is unknown: ${String(item.type)}`);
  }

  if (item.type === "review") {
    for (const key of ["activityId", "body", "reviewerName"]) {
      if (!hasString(raw, key)) {
        errors.push(`${path}.${key} is required for review items`);
      }
    }
  }

  if (
    item.type === "non-bookable" &&
    typeof item.detailPath !== "string" &&
    typeof item.path !== "string"
  ) {
    errors.push(`${path}.detailPath or ${path}.path is required for non-bookable items`);
  }

  if (
    item.type === "point-of-interest" &&
    typeof item.path !== "string" &&
    typeof item.detailPath !== "string"
  ) {
    errors.push(`${path}.path or ${path}.detailPath is required for point-of-interest items`);
  }
};

const assertFilterContract = (
  section: TGatewayStaticSection,
  path: string,
  errors: string[]
) => {
  if (section.component !== "filters") {
    return;
  }

  if (!hasString(section, "endpoint")) {
    errors.push(`${path}.endpoint must be a non-empty string`);
  }

  section.groups.forEach((group, groupIndex) => {
    const groupPath = `${path}.groups[${groupIndex}]`;
    if (!filterGroupTypes.has(group.type)) {
      errors.push(`${groupPath}.type is unknown: ${String(group.type)}`);
    }

    if (!filterParams.has(group.param)) {
      errors.push(`${groupPath}.param is unknown: ${String(group.param)}`);
    }

    group.options.forEach((option, optionIndex) => {
      const optionPath = `${groupPath}.options[${optionIndex}]`;
      for (const key of ["id", "label", "value"]) {
        if (!hasString(option, key)) {
          errors.push(`${optionPath}.${key} must be a non-empty string`);
        }
      }

      if (typeof option.count !== "number") {
        errors.push(`${optionPath}.count must be a number`);
      }

      if (typeof option.selected !== "boolean") {
        errors.push(`${optionPath}.selected must be a boolean`);
      }
    });
  });
};

const assertSectionContract = (
  section: TGatewayHomeSection,
  path: string,
  errors: string[]
) => {
  const raw = section as Record<string, unknown>;

  if (!hasString(raw, "id")) {
    errors.push(`${path}.id must be a non-empty string`);
  }

  if (!sectionComponents.has(section.component)) {
    errors.push(`${path}.component is unknown: ${String(section.component)}`);
    return;
  }

  if (section.component === "hero") {
    if (!hasString(raw, "text")) {
      errors.push(`${path}.text must be a non-empty string`);
    }
    return;
  }

  if (section.component === "weather_card") {
    if (!hasString(raw, "title")) {
      errors.push(`${path}.title must be a non-empty string`);
    }
    if (!hasArray(raw, "data")) {
      errors.push(`${path}.data must be an array`);
    }
    return;
  }

  if (section.component === "feature_band") {
    section.data.forEach((item, index) => {
      const itemPath = `${path}.data[${index}]`;
      for (const key of ["id", "title", "description"]) {
        if (!hasString(item, key)) {
          errors.push(`${itemPath}.${key} must be a non-empty string`);
        }
      }
      if (item.icon.provider !== "lucide") {
        errors.push(`${itemPath}.icon.provider must be lucide`);
      }
    });
    return;
  }

  if (section.component === "region_map") {
    section.data.forEach((item, index) => {
      if (!item.slug && !item.path) {
        errors.push(`${path}.data[${index}] must include slug or path`);
      }
    });
    return;
  }

  if (section.component === "activity_grid" || section.component === "non_bookable_grid") {
    section.data.forEach((item, index) =>
      assertItemContract(item, `${path}.data[${index}]`, errors)
    );
    if (!isRecord(section.meta?.pagination)) {
      errors.push(`${path}.meta.pagination is required`);
    }
    return;
  }

  section.data.forEach((item, index) =>
    assertItemContract(item, `${path}.data[${index}]`, errors)
  );
};

export const getGatewayHomeContractErrors = (data: TGatewayHome): string[] => {
  const errors: string[] = [];

  data.staticSections?.forEach((section, index) => {
    const path = `staticSections[${index}]`;
    if (!staticSectionComponents.has(section.component)) {
      errors.push(`${path}.component is unknown: ${String(section.component)}`);
      return;
    }
    assertFilterContract(section, path, errors);
  });

  if (!Array.isArray(data.sections)) {
    return ["sections must be an array"];
  }

  data.sections.forEach((section, index) =>
    assertSectionContract(section, `sections[${index}]`, errors)
  );

  return errors;
};

export const assertGatewayHomeContract = (data: TGatewayHome) => {
  const errors = getGatewayHomeContractErrors(data);
  if (errors.length > 0) {
    throw new Error(`Gateway home contract mismatch:\n${errors.join("\n")}`);
  }
};

export const getGatewayDetailContractErrors = (
  data: TGatewayActivityDetail | TGatewayDetail
): string[] => {
  const errors: string[] = [];
  const raw = data as Record<string, unknown>;

  if (!hasString(raw, "id")) {
    errors.push("id must be a non-empty string");
  }

  if (!hasString(raw, "type")) {
    errors.push("type must be a non-empty string");
    return errors;
  }

  if (raw.type === "activity") {
    const activityDetail = data as TGatewayActivityDetail;

    if (!isRecord(activityDetail.activity)) {
      errors.push("activity must be an object");
    }
    if (!Array.isArray(activityDetail.reviews)) {
      errors.push("reviews must be an array");
    }
    if (typeof activityDetail.reviewSummary.totalAmount !== "number") {
      errors.push("reviewSummary.totalAmount must be a number");
    }
    if (!isRecord(activityDetail.productContext)) {
      errors.push("productContext must be an object");
    }
    return errors;
  }

  if (data.type === "blog-post") {
    if (!hasString(raw, "title")) {
      errors.push("title must be a non-empty string");
    }
    if (!hasArray(raw, "relatedActivities")) {
      errors.push("relatedActivities must be an array");
    }
    return errors;
  }

  if (!("nearbySection" in data) && data.type !== "non-bookable") {
    errors.push(`detail type is unknown: ${data.type}`);
  }

  return errors;
};

export const assertGatewayDetailContract = (
  data: TGatewayActivityDetail | TGatewayDetail
) => {
  const errors = getGatewayDetailContractErrors(data);
  if (errors.length > 0) {
    throw new Error(`Gateway detail contract mismatch:\n${errors.join("\n")}`);
  }
};
