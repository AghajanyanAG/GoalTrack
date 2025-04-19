import React from "react";
import { Flex } from "theme-ui";
import { FilterMatches } from "@components/FilterMatches";
import { Match } from "@components/Match";

export const MatchesList: React.FC = () => {
  return (
    <Flex
      as={"section"}
      sx={{
        flexDirection: "column",
        gap: 30,
        alignItems: "center",
        width: 700,
        "@media screen and (max-width: 1149px)": {
          width: "100%",
        },
      }}
    >
      <FilterMatches />
      <Match />
      <Match />
    </Flex>
  );
};
