import { Container } from "theme-ui";
import { Main } from "@components/Main";

export const Home = () => {
  return (
    <Container sx={{ bg: "backgroundDark", pt: 100 }}>
      <Main />
    </Container>
  );
};
