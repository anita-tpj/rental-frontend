import { Flex } from "@radix-ui/themes";
import GenreForm from "../components/genres/GenreForm";
import GenresList from "../components/genres/GenresList";
import SubTitle from "../components/SubTitle";
import { useAuthCtx } from "../context/AuthContext-old";
import useAuth from "../hooks/auth/useAuth";

const GenresPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Flex
        justify="between"
        align="center"
        className="border-b border-b-indigo-500 mb-5 pb-1"
      >
        <SubTitle subTitle="Genres" />
        {user ? <GenreForm /> : null}
      </Flex>
      <GenresList isAuthed={user} />
    </>
  );
};

export default GenresPage;
