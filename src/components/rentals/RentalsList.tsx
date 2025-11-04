import { Box, Button, Card, Flex } from "@radix-ui/themes";
import useRentals from "../../hooks/rentals/useRentals";
import UpdateRental from "./UpdateRental";
import ReturnRental from "./ReturnRental";
const RentalsList = () => {
  const { data, error, isLoading } = useRentals();

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error loading rentals 😢 <br /> {error.message}
      </p>
    );

  return (
    <Box>
      {" "}
      {data?.map((rental) => (
        <Card key={rental._id} className="my-4">
          <Flex justify="between" align="start">
            <Flex direction="column" gap="4">
              <div>
                <strong>Customer:</strong>
                <p>Name: {rental.customer.name}</p>
                <p>Phone: {rental.customer.phone}</p>
                <p>is Gold: {rental.customer.isGold ? "Yes" : "No"}</p>
              </div>
              <div>
                <strong>Movie:</strong>
                <p>Name: {rental.movie.title}</p>
                <p>Rate: {rental.movie.dailyRentalRate}$</p>
              </div>
              <div>
                <p>
                  <strong>Date out: </strong>
                  {rental.rentalDate}
                </p>
                <p>
                  <strong>Date in: </strong>
                  {rental.returnDate}
                </p>
                <p>
                  <strong>Fee: </strong>
                  {rental.rentalFee ? `${rental.rentalFee}$` : ""}
                </p>
              </div>
            </Flex>
            <Flex gap="2">
              <UpdateRental rental={rental} />
              <ReturnRental rental={rental} />
            </Flex>
          </Flex>
        </Card>
      ))}
    </Box>
  );
};

export default RentalsList;
