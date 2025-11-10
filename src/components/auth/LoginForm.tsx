import { Box, Flex, Text, TextField } from "@radix-ui/themes";
import { useRef } from "react";
import useLoginAuth from "../../hooks/auth/useLoginAuth";
import FormModal from "../FormModal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../ErrorMessage";
import { Auth } from "../../services/authService";
import { AuthFormData, AuthSchema } from "./schema";

type TLoginForm = {
  onSuccess: (token: string) => void;
};

export const LoginForm = ({ onSuccess }: TLoginForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<AuthFormData>({
    resolver: zodResolver(AuthSchema),
    mode: "onChange",
  });

  const onSubmit = (data: Auth) => {
    auth.mutate(data);
  };

  const onAuth = () => {
    reset();
  };

  const auth = useLoginAuth(onSuccess, onAuth);

  return (
    <>
      <FormModal
        name="Log In"
        onSubmit={handleSubmit(onSubmit)}
        action="add"
        disabled={!isValid || auth.isPending}
      >
        <Flex direction="column" gap="3">
          <Box>
            {" "}
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email
              </Text>
              <TextField.Root
                {...register("email")}
                placeholder="Enter your email"
              />
            </label>
            {errors.email && (
              <ErrorMessage errorMessage={errors.email.message ?? ""} />
            )}
          </Box>
          <Box>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Password
              </Text>
              <TextField.Root
                {...register("password")}
                placeholder="Enter your password"
              />
            </label>
            {errors.password && (
              <ErrorMessage errorMessage={errors.password.message ?? ""} />
            )}
          </Box>
        </Flex>
      </FormModal>
    </>
  );
};

export default LoginForm;
