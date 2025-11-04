import { Button, Dialog, Flex } from "@radix-ui/themes";
import { ReactNode } from "react";
type TFormModal = {
  name?: string;
  description?: string;
  children: ReactNode;
  onSubmit: (event: HTMLFormElement) => void;
  className?: string;
};

const FormModal = ({ name, description, children, onSubmit }: TFormModal) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>{name}</Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>{name}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {description}
        </Dialog.Description>
        <form onSubmit={onSubmit}>
          {children}
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button type="submit">{name}</Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default FormModal;
