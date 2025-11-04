import { Flex, TextField } from "@radix-ui/themes";
import { useRef } from "react";
import useAddGenre from "../../hooks/genres/useAddGenre";
import FormModal from "../FormModal";

export const GenreForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const onAdd = () => {
    //if (ref.current) ref.current.value = "";
  };

  const onSubmit = (event: HTMLFormElement) => {
    event.preventDefault();
    addGenre.mutate({ name: ref.current?.value || "" });
  };

  const addGenre = useAddGenre(onAdd);
  return (
    <FormModal name="Add new genre" onSubmit={onSubmit}>
      <Flex gap="4" align="center">
        <TextField.Root
          className="grow"
          ref={ref}
          size="3"
          placeholder="Type genre..."
        />
      </Flex>
    </FormModal>
  );
};

export default GenreForm;
