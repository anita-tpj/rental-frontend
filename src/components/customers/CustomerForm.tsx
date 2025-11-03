import { Button, Card, Checkbox, Flex, TextField } from "@radix-ui/themes";
import { useRef, useState } from "react";
import useAddCustomer from "../../hooks/customers/useAddCustomer";

const CustomerForm = () => {
  const refName = useRef<HTMLInputElement>(null);
  const refPhone = useRef<HTMLInputElement>(null);
  const [isGold, setIsGold] = useState(false);

  const onAdd = () => {
    if (refName.current) refName.current.value = "";
    if (refPhone.current) refPhone.current.value = "";

    setIsGold(false);
  };

  const addCustomer = useAddCustomer(onAdd);

  return (
    <Card>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!refName.current?.value || !refPhone.current?.value) {
            console.error("Fields are required");
            return;
          }
          addCustomer.mutate({
            name: refName.current?.value,
            phone: refPhone.current?.value,
            isGold,
          });
        }}
      >
        <Flex gap="4" direction="column">
          <TextField.Root ref={refName} placeholder="Type name" />
          <TextField.Root ref={refPhone} placeholder="Type phone" />
          <Flex gap="2" align="center">
            <Checkbox
              checked={isGold}
              onCheckedChange={(checked) => setIsGold(checked === true)}
            />
            Gold customer
          </Flex>
          <Button type="submit">ADD CUSTOMER</Button>
        </Flex>
      </form>
    </Card>
  );
};

export default CustomerForm;
