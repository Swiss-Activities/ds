import type { TUser } from "../../types/user";

type TUseUserResult = {
  user: TUser;
  error: Error | undefined;
  isLoading: boolean;
  checkSession: () => Promise<void>;
};

export const useUser = (): TUseUserResult => {
  return {
    user: null as unknown as TUser,
    error: undefined,
    isLoading: false,
    checkSession: () => Promise.resolve(),
  };
};
