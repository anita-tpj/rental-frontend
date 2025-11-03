import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import SubTitle from "../components/SubTitle";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <SubTitle subTitle="Ooops..." />
      <p>
        {isRouteErrorResponse(error)
          ? `Invalid page: "  ${error.data}`
          : `Unexpected page: " ${error}`}
      </p>
    </>
  );
};

export default ErrorPage;
