import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import useLoginAuth from "../hooks/users/useLoginAuth";
import { useRef } from "react";

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({onSuccess}: LoginFormProps) => {
  const login = useLoginAuth(onSuccess);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Log In</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Log In</Dialog.Title>
        <Dialog.Description size="2" mb="4"></Dialog.Description>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!emailRef.current?.value || !passwordRef.current?.value)
              return console.log("Fields are required");

            login.mutate({
              email: emailRef.current?.value,
              password: passwordRef.current?.value,
            });
          }}
        >
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
              <TextField.Root
                ref={passwordRef}
                placeholder="Enter your password"
              />
            </label>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                CANCEL
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button type="submit">LOG IN</Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default LoginForm;
