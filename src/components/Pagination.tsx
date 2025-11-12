import { Button, Flex } from "@radix-ui/themes";

interface PaginationProps {
  page: number;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination = ({ hasNext, page, onPrev, onNext }: PaginationProps) => {
  return (
    <Flex gap="2">
      <Button onClick={onPrev} disabled={page === 1}>
        Prev
      </Button>
      <Button onClick={onNext} disabled={!hasNext}>
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
