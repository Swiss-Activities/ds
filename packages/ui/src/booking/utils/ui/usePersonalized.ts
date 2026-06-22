import { useEffect, useState } from "react";

const isQueryFlagEnabled = (value: string | null) =>
  value === "" || value === "true" || value === "1";

function useSearchParamFlag(
  name: string,
  isEnabled: (value: string | null) => boolean
) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEnabled(isEnabled(params.get(name)));
  }, [isEnabled, name]);

  return enabled;
}

export const usePersonalized = () => {
  return useSearchParamFlag("personalized", isQueryFlagEnabled);
};

export const useDevGateway = () => {
  return useSearchParamFlag("dev", isQueryFlagEnabled);
};
