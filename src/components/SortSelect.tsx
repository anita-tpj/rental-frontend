import { Select } from "@radix-ui/themes";

interface SortSelectProps {
  value: string;
  onChange: (order: string) => void;
}
const SortSelect = ({ value, onChange }: SortSelectProps) => {
  const sortOrders = [
    { value: "title", label: "Title" },
    { value: "dailyRentalRate", label: "Daily rate" },
  ];
  return (
    <Select.Root size="3" value={value} onValueChange={onChange}>
      <Select.Trigger className="w-full" placeholder="Order by..." />
      <Select.Content>
        {sortOrders?.map((order) => (
          <Select.Item key={order.value} value={order.value}>
            {order.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default SortSelect;
