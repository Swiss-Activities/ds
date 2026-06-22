import {
  UserContext,
  useUser as useAuth0User,
} from "@auth0/nextjs-auth0/client";
import { TUser } from "../../types/user";

export const useUser = () => {
  return useAuth0User() as UserContext & { user: TUser };
};
