import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

type ConfirmModalProps = {
  onConfirm: () => void;
  action: ReactNode;
  title: string;
  description?: string;
};

const ConfirmModal = ({
  onConfirm,
  action,
  title,
  description,
}: ConfirmModalProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button>{action}</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          {description}
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

export default ConfirmModal;
