import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Flex, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import useAddRental from "../../hooks/rentals/useAddRental";
import { NewRental } from "../../services/rentalService";
import ErrorMessage from "../ErrorMessage";
import FormModal from "../FormModal";
import MovieSelect from "../MovieSelect";
import { RentalFormData, RentalSchema } from "./schema";

interface RentalFormCustomerProps {
  customerId: string;
  customerName: string;
}

const RentalFormCustomers = ({
  customerId,
  customerName,
}: RentalFormCustomerProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<RentalFormData>({
    resolver: zodResolver(RentalSchema),
    mode: "onChange",
  });

  const onAdd = () => {
    reset();
  };

  const onSubmit = (data: NewRental) => {
    addRental.mutate(data);
  };

  const addRental = useAddRental(onAdd);

  return (
    <FormModal
      name="Open new rental for customer:"
      action="rent"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || addRental.isPending}
    >
      <Flex gap="4" direction="column">
        <Box hidden>
          <TextField.Root {...register("customerId")} value={customerId} />
        </Box>
        <Box>
          <TextField.Root value={customerName} />
        </Box>
        <Controller
          control={control}
          name="movieId"
          render={({ field: { value, onChange } }) => (
            <>
              <MovieSelect value={value} onChange={onChange} />
              {errors.movieId && (
                <ErrorMessage errorMessage={errors.movieId.message ?? ""} />
              )}
            </>
          )}
        />
      </Flex>
    </FormModal>
  );
};

export default RentalFormCustomers;
