import { Flex, TextField } from "@radix-ui/themes";
import { useRef } from "react";
import useUpdateRental from "../../hooks/rentals/useUpdateRental";
import { Rental } from "../../services/rentalService";
import FormModal from "../FormModal";

const UpdateRental = ({ rental }: { rental: Rental }) => {
  const refCustomer = useRef<HTMLInputElement>(null);
  const refMovie = useRef<HTMLInputElement>(null);

  const onSubmit = (event: HTMLFormElement) => {
    event.preventDefault();
    if (!refCustomer.current?.value || !refMovie.current?.value) {
      console.error("Fields are required");
      return;
    }
    updateRental.mutate({
      id: rental._id!,
      data: {
        customerId: refCustomer.current.value,
        movieId: refMovie.current.value,
      },
    });
  };

  const updateRental = useUpdateRental();

  return (
    <FormModal name="Update rental" onSubmit={onSubmit}>
      <Flex gap="4" direction="column">
        <TextField.Root ref={refCustomer} placeholder="Type customer ID" />
        <TextField.Root ref={refMovie} placeholder="Type movie ID" />
      </Flex>
    </FormModal>
  );
};

export default UpdateRental;
