import { Box, Button, Card, Flex } from "@radix-ui/themes";
import SubTitle from "../components/SubTitle";
import useRentals from "../hooks/rentals/useRentals";
import RentalForm from "../components/rentals/RentalForm";

const RentalsPage = () => {
  const { data, error, isLoading } = useRentals();

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error loading rentals 😢 <br /> {error.message}
      </p>
    );

  return (
    <Flex
      gap="8"
      justify="between"
      direction={{ initial: "column", md: "row" }}
    >
      <Box width={{ initial: "100%", md: "50%" }}>
        <SubTitle subTitle="Open new rental" />
        <RentalForm />
      </Box>

      <Box width={{ initial: "100%", md: "50%" }}>
        <SubTitle subTitle="Rentals" />
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
                    {rental.rentalFee}$
                  </p>
                </div>
              </Flex>
              <Button>Update</Button>
            </Flex>
          </Card>
        ))}
      </Box>
    </Flex>
  );
};

export default RentalsPage;
