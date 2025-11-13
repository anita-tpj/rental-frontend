import { Select } from "@radix-ui/themes";
import useGenres from "../hooks/genres/useGenres";

interface GenreSelectProps {
  value: string | undefined;
  onChange: (genre: string | undefined) => void;
}

const GenreSelect = ({ value, onChange }: GenreSelectProps) => {
  const { data, error } = useGenres();

  if (error) return;

  return (
    <Select.Root
      size="3"
      value={value}
      onValueChange={onChange}
      defaultValue={value}
    >
      <Select.Trigger className="w-full" placeholder="Select genre" />
      <Select.Content>
        {data?.map((genre) => (
          <Select.Item key={genre._id} value={genre._id!}>
            {genre.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default GenreSelect;
