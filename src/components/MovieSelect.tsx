import { Select } from "@radix-ui/themes";
import useMovies from "../hooks/movies/useMovies";

interface MovieSelectProps {
  value: string | undefined;
  onChange: (customer: string | undefined) => void;
}

const MovieSelect = ({ value, onChange }: MovieSelectProps) => {
  const { data, error } = useMovies();

  if (error) return;

  return (
    <Select.Root size="3" value={value} onValueChange={onChange}>
      <Select.Trigger className="w-full" placeholder="Select movie" />
      <Select.Content>
        {data?.map((movie) => (
          <Select.Item key={movie._id} value={movie._id!}>
            {movie.title}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default MovieSelect;
