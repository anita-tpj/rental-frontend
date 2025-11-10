import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import ConfirmModal from "../ConfirmModal";
type LogOutProps = {
  onConfirm: () => void;
};

const LogOut = ({ onConfirm }: LogOutProps) => {
  return (
    <ConfirmModal
      action="Log Out"
      onConfirm={onConfirm}
      title="Log Out"
      description="Please confirm if you are sure you want to proceed with logging out from Vidly Rental App?"
    />
  );
};

export default LogOut;
