import { Checkbox, Flex, TextField } from "@radix-ui/themes";
import { useRef, useState } from "react";
import useUpdateCustomer from "../../hooks/customers/useUpdateCustomer copy";
import FormModal from "../FormModal";
import { Customer } from "../../services/customerService";

const UpdateCustomer = ({ customer }: { customer: Customer }) => {
  const refName = useRef<HTMLInputElement>(null);
  const refPhone = useRef<HTMLInputElement>(null);
  const [isGold, setIsGold] = useState(customer.isGold ?? false);

  const onSubmit = (event: HTMLFormElement) => {
    event.preventDefault();
    if (!refName.current?.value || !refPhone.current?.value) {
      console.error("Fields are required");
      return;
    }
    updateCustomer.mutate({
      id: customer._id!,
      data: {
        name: refName.current?.value,
        phone: refPhone.current?.value,
        isGold,
      },
    });
  };

  const updateCustomer = useUpdateCustomer();

  return (
    <FormModal name="Update customer" onSubmit={onSubmit}>
      <Flex gap="4" direction="column">
        <TextField.Root
          ref={refName}
          defaultValue={customer.name}
          placeholder="Type name"
        />
        <TextField.Root
          ref={refPhone}
          defaultValue={customer.phone}
          placeholder="Type phone"
        />
        <Flex gap="2" align="center">
          <Checkbox
            checked={isGold}
            onCheckedChange={(checked) => setIsGold(checked === true)}
          />
          Gold customer
        </Flex>
      </Flex>
    </FormModal>
  );
};

export default UpdateCustomer;
