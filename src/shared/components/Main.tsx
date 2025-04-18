import React from "react";
import { Flex } from "theme-ui";
import Topleagues from "./Topleagues";
import PremierLeague from "./PremierLeague";
import MatchesList from "./MatchesList";

const Main: React.FC = () => {
  return (
    <Flex
      sx={{
        bg: "backgroundDark",
        color: "texDark",
        py: 100,
        px: 2,
        gap: 20,
        justifyContent: "space-between",
      }}
    >
      <Topleagues />
      <MatchesList />
      <PremierLeague />
    </Flex>
  );
};

export default Main;
