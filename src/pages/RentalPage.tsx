import { Flex } from "@radix-ui/themes";
import RentalForm from "../components/rentals/RentalForm";
import RentalsList from "../components/rentals/RentalsList";
import SubTitle from "../components/SubTitle";
import SeachInput from "../components/SeachInput";
import { useState } from "react";

const RentalsPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <>
      <Flex
        justify="between"
        align="center"
        className="border-b border-b-indigo-500 mb-5 pb-1"
      >
        <SubTitle subTitle="Rentals" />
        <RentalForm />
      </Flex>
      <SeachInput onSearch={(query) => setSearchQuery(query)} />
      <RentalsList searchQuery={searchQuery} />
    </>
  );
};

export default RentalsPage;
