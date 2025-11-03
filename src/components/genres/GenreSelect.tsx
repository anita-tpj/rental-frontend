import { Box, Select } from "@radix-ui/themes";
import useGenres from "../../hooks/genres/useGenres";

interface GenreSelectProps {
  value: string | undefined;
  onChange: (genre: string | undefined) => void;
}

const GenreSelect = ({ value, onChange }: GenreSelectProps) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error loading genres 😢 <br /> {error.message}
      </p>
    );

  return (
    <Box className="w-1/2">
      <Select.Root size="3" value={value} onValueChange={onChange}>
        <Select.Trigger className="w-full" placeholder="Select genre" />
        <Select.Content>
          {data?.map((genre) => (
            <Select.Item key={genre.name} value={genre.name}>
              {genre.name}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Box>
  );
};

export default GenreSelect;
