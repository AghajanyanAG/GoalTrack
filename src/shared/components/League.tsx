import React from "react";
import { Box, Link, Image, Text, Flex } from "theme-ui";

export const League: React.FC = () => (
  <Box as="ul" sx={{ listStyleType: "none", padding: 0 }}>
    <Flex
      as="li"
      sx={{
        py: 2,
        px: 4,
        transition: "0.2s",
        "&:hover": {
          cursor: "pointer",
          bg: "lightGray",
        },
      }}
    >
      <Link href="/details/1" sx={{ "&:hover": { textDecoration: "none" } }}>
        <Flex sx={{ gap: 30, alignItems: "center" }}>
          <Image src="src/app/assets/." />
          <Text variant="text.primary">La liga</Text>
        </Flex>
      </Link>
    </Flex>
  </Box>
);
