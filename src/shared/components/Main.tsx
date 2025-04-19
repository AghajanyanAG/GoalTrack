import React from "react";
import { Flex } from "theme-ui";
import { Topleagues } from "@components/Topleagues";
import { PremierLeague } from "@components/PremierLeague";
import { MatchesList } from "@components/MatchesList";

export const Main: React.FC = () => {
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
