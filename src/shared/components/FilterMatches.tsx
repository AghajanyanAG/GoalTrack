import React from "react";
import { Button, Flex } from "theme-ui";

const FilterMatches: React.FC = () => {
  return (
    <Flex
      sx={{
        gap: [2, 3, 20],
        justifyContent: ["center", "space-between"],
        alignItems: "center",
        bg: "primary",
        borderRadius: 15,
        width: "100%",
        px: [2, 3, 4],
        py: [2, 3, 10],
        flexDirection: ["column", "row"],
      }}
    >
      <Button
        sx={{
          width: ["100%", "auto", 200],
          minWidth: 120,
          px: 3,
          textAlign: "center",
        }}
        variant="filtered"
      >
        Ongoing
      </Button>
      <Button
        sx={{
          width: ["100%", "auto", 200],
          minWidth: 120,
          px: 3,
          textAlign: "center",
        }}
        variant="filtered"
      >
        On TV
      </Button>
      <Button
        sx={{
          width: ["100%", "auto", 200],
          minWidth: 120,
          px: 3,
          textAlign: "center",
        }}
        variant="filtered"
      >
        By time
      </Button>
    </Flex>
  );
};

export default FilterMatches;
