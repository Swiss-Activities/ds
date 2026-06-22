type TPersonalizedOptionSelection = {
  key: string;
  label: string;
  condition?: Record<string, number[]>;
  optionAttributes?: { sortOrder?: number; description?: string };
};

type TPersonalizedOption = {
  key: string;
  label: string;
  scope: string;
  type: string;
  options: TPersonalizedOptionSelection[];
  isStrict: boolean;
  order: number;
};

export type { TPersonalizedOption, TPersonalizedOptionSelection };
