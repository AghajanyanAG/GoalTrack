import React from "react";
import { Flex, Heading } from "theme-ui";
import { League } from "@components/League";

export const Topleagues: React.FC = () => {
  return (
    <Flex
      sx={{
        bg: "primary",
        py: 10,
        borderRadius: 15,
        width: 270,
        gap: 20,
        flexDirection: "column",
        "@media screen and (max-width: 1149px)": {
          display: "none",
        },
      }}
    >
      <Heading as="h1" variant="headingDark" sx={{ px: 4 }}>
        Top Leagues
      </Heading>
      <League />
      <League />
      <League />
      <League />
      <League />
      <League />
      <League />
      <League />
    </Flex>
  );
};
