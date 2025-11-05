import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Checkbox, Flex, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import useUpdateUser from "../../hooks/users/useUpdateUser";
import { User } from "../../services/userService";
import ErrorMessage from "../ErrorMessage";
import FormModal from "../FormModal";
import { UserFormData, UserSchema } from "./schema";

export const UpdateUser = ({ user }: { user: User }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
    mode: "onChange",
    defaultValues: {
      userName: user.userName,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
    },
  });

  const onSubmit = (data: User) => {
    updateUser.mutate({ id: user._id!, data });
  };

  const updateUser = useUpdateUser();

  return (
    <FormModal
      name="Update user user"
      action="update"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || updateUser.isPending}
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

export default UpdateUser;
