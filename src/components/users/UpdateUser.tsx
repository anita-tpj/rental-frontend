import { Checkbox, Flex, TextField } from "@radix-ui/themes";
import { useRef, useState } from "react";
import FormModal from "../FormModal";
import useUpdateUser from "../../hooks/users/useUpdateUser";
import { User } from "../../services/userService";

export const UpdateUser = ({ user }: { user: User }) => {
  const refName = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin ?? false);
  const onSubmit = (event: HTMLFormElement) => {
    event.preventDefault();
    if (
      !refName.current?.value ||
      !refEmail.current?.value ||
      !refPassword.current?.value
    ) {
      console.error("Fields are required");
      return;
    }
    updateUser.mutate({
      id: user._id!,
      data: {
        userName: refName.current?.value,
        email: refEmail.current?.value,
        password: refPassword.current?.value,
        isAdmin,
      },
    });
  };

  const updateUser = useUpdateUser();
  return (
    <FormModal name="Update" description={"Update user"} onSubmit={onSubmit}>
      <Flex gap="4" direction="column">
        <TextField.Root
          ref={refName}
          defaultValue={user.userName}
          placeholder="Type new name"
        />
        <TextField.Root
          ref={refEmail}
          defaultValue={user.email}
          placeholder="Type new email"
        />
        <TextField.Root
          ref={refPassword}
          placeholder="Type new password"
        />
        <Flex gap="2" align="center">
          <Checkbox
            checked={isAdmin}
            onCheckedChange={(checked) => setIsAdmin(checked === true)}
          />
          Admin rule
        </Flex>
      </Flex>
    </FormModal>
  );
};

export default UpdateUser;
