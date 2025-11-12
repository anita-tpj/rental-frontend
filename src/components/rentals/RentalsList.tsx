import { Box, Card, Flex } from "@radix-ui/themes";
import useRentals from "../../hooks/rentals/useRentals";
import ReturnRental from "./ReturnRental";
import dayjs from "dayjs";
import RentalsListSkeleton from "./RentalListSkeleton";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";
interface RentalListProps {
  searchQuery: string;
}
const RentalsList = ({ searchQuery }: RentalListProps) => {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  const { data, error, isLoading } = useRentals({
    searchQuery,
    pageSize,
    page,
  });
  const hasNext = data?.length === pageSize;

  if (isLoading) return <RentalsListSkeleton />;
  if (error)
    return (
      <p>
        Error loading rentals 😢 <br /> {error.message}
      </p>
    );

  return (
    <Box>
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
                  {dayjs(rental.rentalDate).format("DD/MM/YYYY")}
                </p>
                <p>
                  <strong>Date in: </strong>
                  {dayjs(rental.returnDate).format("DD/MM/YYYY")}
                </p>
                <p>
                  <strong>Fee: </strong>
                  {rental.rentalFee ? `${rental.rentalFee}$` : ""}
                </p>
              </div>
            </Flex>
            <Flex gap="2">
              {/* <UpdateRental rental={rental} /> */}
              <ReturnRental rental={rental} />
            </Flex>
          </Flex>
        </Card>
      ))}
      {(page > 1 || hasNext) && (
        <Pagination
          hasNext={hasNext}
          page={page}
          onNext={() => setPage((page) => page + 1)}
          onPrev={() => setPage((page) => page - 1)}
        />
      )}
    </Box>
  );
};

export default RentalsList;
