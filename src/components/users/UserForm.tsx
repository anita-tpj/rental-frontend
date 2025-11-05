import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Checkbox, Flex, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import useAddUser from "../../hooks/users/useAddUser";
import { User } from "../../services/userService";
import ErrorMessage from "../ErrorMessage";
import FormModal from "../FormModal";
import { UserFormData, UserSchema } from "./schema";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
    mode: "onChange",
    defaultValues: { email: "", password: "", isAdmin: false },
  });
  const onAdd = () => {
    reset();
  };

  const onSubmit = (data: User) => {
    addUser.mutate(data);
  };

  const addUser = useAddUser(onAdd);

  return (
    <FormModal
      name="Add new user"
      action="add"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || addUser.isPending}
    >
      <Flex gap="4" direction="column">
        <Box>
          <TextField.Root {...register("userName")} placeholder="Type name" />
          {errors.userName && (
            <ErrorMessage errorMessage={errors.userName.message ?? ""} />
          )}
        </Box>
        <Box>
          <TextField.Root {...register("email")} placeholder="Type email" />
          {errors.email && (
            <ErrorMessage errorMessage={errors.email.message ?? ""} />
          )}
        </Box>
        <Box>
          <TextField.Root
            {...register("password")}
            placeholder="Type password"
          />
          {errors.password && (
            <ErrorMessage errorMessage={errors.password.message ?? ""} />
          )}
        </Box>
        <Flex gap="2" align="center">
          <Controller
            control={control}
            name="isAdmin"
            render={({ field: { value, onChange } }) => (
              <Checkbox
                checked={value}
                onCheckedChange={(v) => onChange(v === true)}
              />
            )}
          />
          Admin rule
        </Flex>
      </Flex>
    </FormModal>
  );
};

export default UserForm;
