import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Flex, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import useUpdateRental from "../../hooks/rentals/useUpdateRental";
import { NewRental, Rental } from "../../services/rentalService";
import ErrorMessage from "../ErrorMessage";
import FormModal from "../FormModal";
import { RentalFormData, RentalSchema } from "./schema";

const UpdateRental = ({ rental }: { rental: Rental }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RentalFormData>({
    resolver: zodResolver(RentalSchema),
    mode: "onChange",
    defaultValues: {
      customerId: rental.customer._id,
      movieId: rental.movie._id,
    },
  });

  const onSubmit = (data: NewRental) => {
    updateRental.mutate({ id: rental._id!, data });
  };

  const updateRental = useUpdateRental();

  return (
    <FormModal
      name="Update rental"
      action="update"
      onSubmit={handleSubmit(onSubmit)}
      disabled={!isValid || updateRental.isPending}
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

export default UpdateRental;
