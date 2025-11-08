import { Flex, Text, TextField } from "@radix-ui/themes";
import { useRef } from "react";
import useLoginAuth from "../../hooks/users/useLoginAuth";
import FormModal from "../FormModal";

type TLoginForm = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: TLoginForm) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: HTMLFormElement) => {
    event.preventDefault();
    if (!emailRef.current?.value || !passwordRef.current?.value)
      return console.log("Fields are required");

    login.mutate({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
  };

  const login = useLoginAuth(onSuccess);

  return (
    <FormModal name="Log In" onSubmit={onSubmit}>
      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Email
          </Text>
          <TextField.Root ref={emailRef} placeholder="Enter your email" />
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Password
          </Text>
          <TextField.Root ref={passwordRef} placeholder="Enter your password" />
        </label>
      </Flex>
    </FormModal>
  );
};

export default LoginForm;
