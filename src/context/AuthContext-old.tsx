import { createContext, useContext, useState } from "react";

type AuthCtx = { isAuthed: boolean; setIsAuthed: (v: boolean) => void };

const Ctx = createContext<AuthCtx>(null!);

export function AuthProviderOld({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(
    Boolean(localStorage.getItem("token"))
  );
  return (
    <Ctx.Provider value={{ isAuthed, setIsAuthed }}>{children}</Ctx.Provider>
  );
}
export const useAuthCtx = () => useContext(Ctx);
