import React from "react";
import { DecodedUser } from "../providers/AuthProvider";

interface AuthContext {
  user: DecodedUser | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContext>({} as AuthContext);

export default AuthContext;
