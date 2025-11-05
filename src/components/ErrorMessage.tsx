import { Text } from "@radix-ui/themes";

interface ErrorMessageProps {
  errorMessage: string;
}
const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <Text color="red" size="2">
      {errorMessage}
    </Text>
  );
};

export default ErrorMessage;
