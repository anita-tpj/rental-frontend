import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Checkbox, Flex, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import useAddCustomer from "../../hooks/customers/useAddCustomer";
import { Customer } from "../../services/customerService";
import ErrorMessage from "../ErrorMessage";
import FormModal from "../FormModal";
import { CustomerFormData, CustomerSchema } from "./schema";

const CustomerForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(CustomerSchema),
    mode: "onChange",
    defaultValues: { name: "", phone: "", isGold: false },
  });

  const onAdd = () => {
    reset();
  };

  const onSubmit = (data: Customer) => {
    addCustomer.mutate(data);
  };

  const addCustomer = useAddCustomer(onAdd);

  return (
    <FormModal
      name="Add new customer"
      action="add"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || addCustomer.isPending}
    >
      <Flex gap="4" direction="column">
        <Box>
          <TextField.Root {...register("name")} placeholder="Type name" />
          {errors.name && (
            <ErrorMessage errorMessage={errors.name.message ?? ""} />
          )}
        </Box>
        <Box>
          <TextField.Root {...register("phone")} placeholder="Type phone" />
          {errors.phone && (
            <ErrorMessage errorMessage={errors.phone.message ?? ""} />
          )}
        </Box>

        <Flex gap="2" align="center">
          <Controller
            control={control}
            name="isGold"
            render={({ field: { value, onChange } }) => (
              <Checkbox
                checked={value}
                onCheckedChange={(v) => onChange(v === true)}
              />
            )}
          />
          Gold customer
        </Flex>
      </Flex>
    </FormModal>
  );
};

export default CustomerForm;
