import { useLocation, useNavigate } from "react-router-dom";
import useLoginAuth from "../hooks/users/useLoginAuth";
import { Button, Flex, TextField } from "@radix-ui/themes";
import { useRef } from "react";
import SubTitle from "../components/SubTitle";
import { useAuthCtx } from "../context/AuthContext";

export default function LoginPage() {
  const { setIsAuthed } = useAuthCtx();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/movies";
  const onSuccess = () => {
    navigate(from, { replace: true });
    setIsAuthed(true);
  };
  const login = useLoginAuth(onSuccess);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const email = emailRef.current?.value || "";
        const password = passwordRef.current?.value || "";
        if (!email || !password) return;

        login.mutate({ email, password });
      }}
    >
      <SubTitle subTitle="Log In" />
      <Flex direction="column" gap="3" style={{ maxWidth: 360 }}>
        <TextField.Root ref={emailRef} type="email" placeholder="Email" />
        <TextField.Root
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
        <Button type="submit" disabled={login.isPending}>
          {login.isPending ? "LOGGING IN..." : "LOG IN"}
        </Button>
      </Flex>
    </form>
  );
}
