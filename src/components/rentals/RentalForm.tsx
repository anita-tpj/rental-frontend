import { Button, Card, Flex, TextField } from "@radix-ui/themes";
import { useRef } from "react";
import useAddRental from "../../hooks/rentals/useAddRental";

const RentalForm = () => {
  const refCustomer = useRef<HTMLInputElement>(null);
  const refMovie = useRef<HTMLInputElement>(null);
  const onAdd = () => {
    if (refCustomer.current) refCustomer.current.value = "";
    if (refMovie.current) refMovie.current.value = "";
  };
  const addRental = useAddRental(onAdd);
  return (
    <Card>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!refCustomer.current?.value || !refMovie.current?.value) {
            console.error("Fields are required");
            return;
          }
          addRental.mutate({
            customerId: refCustomer.current?.value,
            movieId: refMovie.current?.value,
          });
        }}
      >
        <Flex gap="4" direction="column">
          <TextField.Root ref={refCustomer} placeholder="Type customer ID" />
          <TextField.Root ref={refMovie} placeholder="Type movie ID" />
          <Button type="submit">OPEN RENTAL</Button>
        </Flex>
      </form>
    </Card>
  );
};

export default RentalForm;
