import { Button, Card, Checkbox, Flex, TextField } from "@radix-ui/themes";
import { useRef, useState } from "react";
import useAddUser from "../../hooks/users/useAddUser";

const UserForm = () => {
  const refName = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const onAdd = () => {
    if (refEmail.current) refEmail.current.value = "";
    if (refPassword.current) refPassword.current.value = "";
    if (refName.current) refName.current.value = "";
    setIsAdmin(false);
  };

  const addUser = useAddUser(onAdd);

  return (
    <Card>
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
    </Card>
  );
};

export default UserForm;
