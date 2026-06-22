export const secureLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage?.getItem(key);
    } catch (error) {
      return null;
    }
  },

  setItem: (key: string, value: string): boolean => {
    try {
      localStorage?.setItem(key, value);
      return true;
    } catch (error) {
      return false;
    }
  },

  removeItem: (key: string): boolean => {
    try {
      localStorage?.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  },
};
