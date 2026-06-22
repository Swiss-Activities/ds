import { useEffect, useState } from "react";

export const useIsMobileOS = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    setIsAndroid(/android/.test(userAgent));
    setIsLoading(false);
  }, []);

  const isMobileDevice = isIOS || isAndroid;

  return { isIOS, isAndroid, isMobileDevice, isLoading };
};
