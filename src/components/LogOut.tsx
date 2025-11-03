import { AlertDialog, Button, Flex } from "@radix-ui/themes";
type LogOutProps = {
  onConfirm: () => void;
};

const LogOut = ({ onConfirm }: LogOutProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button>Log Out</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Log Out</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Confirm log out from Vidly Rental App?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              CANCEL
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={onConfirm} variant="solid">
              CONFIRM
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default LogOut;
