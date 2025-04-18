import React from "react";
import { Flex, Link, Text, Image, Box, Divider } from "theme-ui";

const MatchInfo: React.FC = () => {
  return (
    <Link sx={{ width: "100%", "&:hover": { textDecoration: "none" } }}>
      <Flex
        as={"li"}
        sx={{
          py: 3,
          px: 4,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: [10, 15, 20],
          "&:hover": {
            cursor: "pointer",
            bg: "lightGray",
            borderRadius: 15,
          },
        }}
      >
        <Flex sx={{ alignItems: "center" }}>
          <Text variant="text.primary" sx={{ fontSize: 1 }}>
            Manchester City
          </Text>
          <Image src="src/app/assets/." />
        </Flex>
        <Box>
          <Text sx={{ fontSize: 2 }}>20:31</Text>
        </Box>
        <Flex sx={{ alignItems: "center" }}>
          <Image src="src/app/assets/." />
          <Text variant="text.primary" sx={{ fontSize: 1 }}>
            Liverpool
          </Text>
        </Flex>
      </Flex>
      <Divider />
    </Link>
  );
};

export default MatchInfo;
