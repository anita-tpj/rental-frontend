import { DecodedUser } from "../providers/AuthProvider";

interface AuthLoginAction {
  type: "LOGIN";
  user: DecodedUser | null;
}

interface AuthLogoutAction {
  type: "LOGOUT";
}

export type AuthAction = AuthLoginAction | AuthLogoutAction;

const authReducer = (
  state: DecodedUser | null,
  action: AuthAction
): DecodedUser | null => {
  if (action.type === "LOGIN") {
    return action.user;
  }
  if (action.type === "LOGOUT") return null;

  return state;
};

export default authReducer;
