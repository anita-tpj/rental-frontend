import { Button, Checkbox, Flex, TextField } from "@radix-ui/themes";
import { useRef, useState } from "react";
import useAddCustomer from "../../hooks/customers/useAddCustomer";

const CustomerForm = () => {
  const addCustomer = useAddCustomer();
  const refName = useRef<HTMLInputElement>(null);
  const refPhone = useRef<HTMLInputElement>(null);
  const [isGold, setIsGold] = useState(false);

  return (
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
          <Checkbox />
          <Checkbox
            checked={isGold}
            onCheckedChange={(checked) => setIsGold(checked === true)}
          />
          Gold customer
        </Flex>
        <Button type="submit">ADD CUSTOMER</Button>
      </Flex>
    </form>
  );
};

export default CustomerForm;
