import React from "react";
import { Flex, Link, Heading, Image } from "theme-ui";
import { MatchInfo } from "@components/MatchInfo";

export const Match: React.FC = () => {
  return (
    <Flex
      sx={{
        bg: "primary",
        flexDirection: "column",
        width: "100%",
        borderRadius: 15,
        gap: 20,
      }}
    >
      <Link
        sx={{
          bg: "#282828",
          "&:hover": { textDecoration: "none", bg: "lightGray" },
          borderRadius: 15,
        }}
      >
        <Flex sx={{ alignItems: "center", gap: 20, py: 15, px: 4 }}>
          <Image src="src/app/assets/." />
          <Heading as="h1" variant="headingDark">
            Premier League
          </Heading>
        </Flex>
      </Link>
      <Flex
        as={"ul"}
        sx={{
          listStyleType: "none",
          padding: 0,
          flexDirection: "column",
        }}
      >
        <MatchInfo />
        <MatchInfo />
      </Flex>
    </Flex>
  );
};
