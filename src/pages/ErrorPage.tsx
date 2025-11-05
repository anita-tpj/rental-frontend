import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import SubTitle from "../components/SubTitle";
import { Box, Text } from "@radix-ui/themes";
import { Flex } from "@radix-ui/themes/src/index.js";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className="p-6 bg-indigo-100 h-screen"
    >
      <SubTitle subTitle="Ooops..." />
      <Text size="5" align="center">
        {isRouteErrorResponse(error)
          ? `Invalid page: "  ${error.data}`
          : `Unexpected error: " ${error}`}
      </Text>
    </Flex>
  );
};

export default ErrorPage;
