import { createContext, useContext, useState } from "react";

type AuthCtx = { isAuthed: boolean; setIsAuthed: (v: boolean) => void };
type User = {
  _id: string;
  name: string;
  email: string;
};
const Ctx = createContext<AuthCtx>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(
    Boolean(localStorage.getItem("token"))
  );
  const [user, setUser] = useState<User | null>(null);
  return (
    <Ctx.Provider value={{ isAuthed, setIsAuthed, user, setUser }}>{children}</Ctx.Provider>
  );
}
export const useAuthCtx = () => useContext(Ctx);
