import { Select } from "@radix-ui/themes";
import useCustomers from "../hooks/customers/useCustomers";

interface CustomerSelectProps {
  value: string | undefined;
  onChange: (customer: string | undefined) => void;
}

const CustomerSelect = ({ value, onChange }: CustomerSelectProps) => {
  const { data, error } = useCustomers();

  if (error) return;

  return (
    <Select.Root size="3" value={value} onValueChange={onChange}>
      <Select.Trigger className="w-full" placeholder="Select customer"/>
      <Select.Content>
        {data?.map((customer) => (
          <Select.Item key={customer._id} value={customer._id!}>
            {customer.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default CustomerSelect;
