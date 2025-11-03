import { Button, Checkbox, Flex, TextField } from "@radix-ui/themes";
import { useRef, useState } from "react";
import useAddUser from "../../hooks/users/useAddUser";

const UserForm = () => {
  const addUser = useAddUser();
  const refName = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !refName.current?.value ||
          !refEmail.current?.value ||
          !refPassword.current?.value
        ) {
          console.error("Fields are required");
          return;
        }
        addUser.mutate({
          userName: refName.current?.value,
          email: refEmail.current?.value,
          password: refPassword.current?.value,
          isAdmin,
        });
      }}
    >
      <Flex gap="4" direction="column">
        <TextField.Root ref={refName} placeholder="Type name" />
        <TextField.Root ref={refEmail} placeholder="Type email" />
        <TextField.Root ref={refPassword} placeholder="Type password" />
        <Flex gap="2" align="center">
          <Checkbox
            checked={isAdmin}
            onCheckedChange={(checked) => setIsAdmin(checked === true)}
          />
          Admin rule
        </Flex>
        <Button type="submit">ADD USER</Button>
      </Flex>
    </form>
  );
};

export default UserForm;
