import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import { useRef } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SeachInput = ({ onSearch }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(ref.current?.value ?? "");
      }}
    >
      <TextField.Root ref={ref} size="3" placeholder="Search...">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </form>
  );
};

export default SeachInput;
