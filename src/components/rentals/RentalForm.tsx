import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Flex, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import useAddRental from "../../hooks/rentals/useAddRental";
import { NewRental } from "../../services/rentalService";
import FormModal from "../FormModal";
import { RentalFormData, RentalSchema } from "./schema";
import ErrorMessage from "../ErrorMessage";

const RentalForm = () => {
  const {
    register,
    handleSubmit,
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
      name="Open new rental"
      action="add"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || addRental.isPending}
    >
      <Flex gap="4" direction="column">
        <Box>
          <TextField.Root
            {...register("customerId")}
            placeholder="Type customer ID"
          />
          {errors.customerId && (
            <ErrorMessage errorMessage={errors.customerId.message ?? ""} />
          )}
        </Box>
        <Box>
          <TextField.Root
            {...register("movieId")}
            placeholder="Type movie ID"
          />
          {errors.movieId && (
            <ErrorMessage errorMessage={errors.movieId.message ?? ""} />
          )}
        </Box>
      </Flex>
    </FormModal>
  );
};

export default RentalForm;
