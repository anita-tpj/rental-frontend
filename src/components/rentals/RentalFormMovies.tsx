import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Flex, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";
import useAddRental from "../../hooks/rentals/useAddRental";
import { NewRental } from "../../services/rentalService";
import FormModal from "../FormModal";
import { RentalFormData, RentalSchema } from "./schema";
import ErrorMessage from "../ErrorMessage";
import CustomerSelect from "../CustomerSelect";

interface RentalFormCustomerProps {
  movieId: string;
  movieTitle: string;
  movieStock: boolean;
}

const RentalFormMovies = ({
  movieId,
  movieTitle,
  movieStock,
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
      name="Open new rental for movie:"
      action="rent"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || addRental.isPending}
      disabledTrigger={movieStock}
    >
      <Flex gap="4" direction="column">
        <Box hidden>
          <TextField.Root
            {...register("movieId")}
            placeholder="Type movie ID"
            value={movieId}
          />
        </Box>
        <Box>
          <TextField.Root value={movieTitle} />
        </Box>
        <Controller
          control={control}
          name="customerId"
          render={({ field: { value, onChange } }) => (
            <>
              <CustomerSelect value={value} onChange={onChange} />
              {errors.customerId && (
                <ErrorMessage errorMessage={errors.customerId.message ?? ""} />
              )}
            </>
          )}
        />
      </Flex>
    </FormModal>
  );
};

export default RentalFormMovies;
