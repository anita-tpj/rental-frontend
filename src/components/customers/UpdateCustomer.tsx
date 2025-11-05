import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Checkbox, Flex, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import useUpdateCustomer from "../../hooks/customers/useUpdateCustomer copy";
import { Customer } from "../../services/customerService";
import ErrorMessage from "../ErrorMessage";
import FormModal from "../FormModal";
import { CustomerFormData, CustomerSchema } from "./schema";

const UpdateCustomer = ({ customer }: { customer: Customer }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(CustomerSchema),
    mode: "onChange",
    defaultValues: {
      name: customer.name,
      phone: customer.phone,
      isGold: customer.isGold,
    },
  });

  const onSubmit = (data: Customer) => {
    updateCustomer.mutate({
      id: customer._id!,
      data,
    });
  };

  const updateCustomer = useUpdateCustomer();

  return (
    <FormModal
      name="Update customer"
      action="update"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || updateCustomer.isPending}
    >
      <Flex gap="4" direction="column">
        <Box>
          <TextField.Root
            {...register("name")}
            defaultValue={customer.name}
            placeholder="Type name"
          />
          {errors.name && (
            <ErrorMessage errorMessage={errors.name.message ?? ""} />
          )}
        </Box>
        <Box>
          <TextField.Root
            {...register("phone")}
            defaultValue={customer.phone}
            placeholder="Type phone"
          />
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

export default UpdateCustomer;
