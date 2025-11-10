import { jwtDecode } from "jwt-decode";
import { ReactNode, useCallback, useReducer } from "react";
import AuthContext from "../context/AuthContext";
import authuthReducer from "../reducers/authReducer";

interface AuthProviderProps {
  children: ReactNode;
}
export interface DecodedUser {
  _id: string;
  userName?: string;
  isAdmin?: boolean;
}

const init = (): DecodedUser | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    return jwtDecode<DecodedUser>(token);
  } catch {
    return null;
  }
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, dispatch] = useReducer(authuthReducer, null, init);

  const login = useCallback((token: string) => {
    localStorage.setItem("token", token);

    try {
      const decoded = jwtDecode<DecodedUser>(token);
      dispatch({ type: "LOGIN", user: decoded });
    } catch {
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");

    dispatch({ type: "LOGOUT" });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
