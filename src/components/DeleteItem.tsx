import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React from "react";
import ConfirmModal from "./ConfirmModal";

type TDeleteItem = {
  onDelete: () => void;
};

export const DeleteItem = ({ onDelete }: TDeleteItem) => {
  return (
    <ConfirmModal
      action={<TrashIcon />}
      onConfirm={onDelete}
      title="Delete"
      description="Please confirm if you are sure you want to proceed with deleting?"
    />
  );
};

export default DeleteItem;
