import { Flex } from "@radix-ui/themes";
import GenreForm from "../components/genres/GenreForm";
import GenresList from "../components/genres/GenresList";
import SubTitle from "../components/SubTitle";
import { useAuthCtx } from "../context/AuthContext";

const GenresPage = () => {
  const { isAuthed } = useAuthCtx();

  return (
    <>
      <Flex
        justify="between"
        align="center"
        className="border-b border-b-indigo-500 mb-5"
      >
        <SubTitle subTitle="Genres" />
        {isAuthed ? <GenreForm /> : null}
      </Flex>
      <GenresList isAuthed={isAuthed} />
    </>
  );
};

export default GenresPage;
