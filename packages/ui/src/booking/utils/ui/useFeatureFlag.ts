import { useEffect, useState } from "react";
import posthog from "posthog-js";

type FeatureFlagState = {
  loading: boolean;
  enabled: boolean;
  variant: string | undefined;
};

const READY_STATE: FeatureFlagState = {
  loading: false,
  enabled: false,
  variant: undefined,
};

const FLAG_LOAD_TIMEOUT_MS = 5000;

const FORCED_VARIANTS: Record<string, string | undefined> = {
  NEXT_PUBLIC_CANCELLATION_CARD_VARIANT:
    process.env.NEXT_PUBLIC_CANCELLATION_CARD_VARIANT,
};

export const useFeatureFlag = (
  flag: string,
  forceVariantEnvVar?: string
): FeatureFlagState => {
  const forced = forceVariantEnvVar
    ? FORCED_VARIANTS[forceVariantEnvVar]
    : undefined;
  const hasPostHogKey = Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);
  const shouldLoad =
    !forced && process.env.NODE_ENV !== "development" && hasPostHogKey;

  const [state, setState] = useState<FeatureFlagState>(() => {
    if (forced) {
      return {
        loading: false,
        enabled: forced !== "false" && forced !== "control",
        variant: forced,
      };
    }
    return shouldLoad ? { ...READY_STATE, loading: true } : READY_STATE;
  });

  useEffect(() => {
    if (forced) return;
    if (!shouldLoad) return;

    let active = true;
    let resolved = false;

    const resolve = (errorsLoading = false) => {
      if (!active || resolved) return;
      resolved = true;
      const value = errorsLoading ? undefined : posthog.getFeatureFlag(flag);
      const variant = typeof value === "string" ? value : undefined;
      const enabled =
        value === true ||
        (typeof value === "string" && value !== "control" && value !== "false");
      setState({ loading: false, enabled, variant });
    };

    const unsubscribe = posthog.onFeatureFlags((_flags, _variants, context) => {
      resolve(Boolean(context?.errorsLoading));
    });

    posthog.featureFlags.ensureFlagsLoaded();
    const timer = window.setTimeout(() => resolve(true), FLAG_LOAD_TIMEOUT_MS);

    return () => {
      active = false;
      window.clearTimeout(timer);
      unsubscribe();
    };
  }, [flag, forced, shouldLoad]);

  return state;
};
