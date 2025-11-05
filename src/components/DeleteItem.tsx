import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React from "react";

type TDeleteItem = {
  onDelete: () => void;
};

export const DeleteItem = ({ onDelete }: TDeleteItem) => {
  return (
    <Button onClick={onDelete}>
      <TrashIcon />
    </Button>
  );
};

export default DeleteItem;
