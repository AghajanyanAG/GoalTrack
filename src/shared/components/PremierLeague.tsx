import React from "react";
import { Card, Heading, Text, Image, Flex } from "theme-ui";

export const PremierLeague: React.FC = () => {
  return (
    <Card
      sx={{
        width: 250,
        borderRadius: 15,
        bg: "primary",
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
        "@media screen and (max-width: 1149px)": {
          display: "none",
        },
      }}
    >
      <Heading
        variant="headingDark"
        sx={{
          p: 2,
        }}
      >
        Premier League
      </Heading>

      <Flex
        sx={{
          p: 2,
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Text variant="text.primary" sx={{ fontSize: 1 }}>
          #
        </Text>
        <Flex sx={{ alignItems: "center", gap: 15 }}>
          <Text variant="text.primary" sx={{ fontSize: 1 }}>
            PL
          </Text>
          <Text variant="text.primary" sx={{ fontSize: 1 }}>
            GD
          </Text>
          <Text variant="text.primary" sx={{ fontSize: 1 }}>
            PTS
          </Text>
        </Flex>
      </Flex>

      <Flex
        sx={{
          p: 2,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "space-between",
          "&:hover": {
            bg: "lightGray",
            cursor: "pointer",
          },
        }}
      >
        <Flex sx={{ alignItems: "center" }}>
          <Text variant="text.primary">1</Text>
          <Image
            src="src/app/assets/."
            sx={{
              width: 24,
              height: 24,
            }}
          />
          <Text
            variant="text.primary"
            sx={{
              fontSize: 1,
            }}
          >
            Southampton
          </Text>
        </Flex>
        <Flex sx={{ alignItems: "center", gap: 18 }}>
          <Text
            variant="text.primary"
            sx={{
              fontSize: 1,
              textAlign: "center",
            }}
          >
            32
          </Text>
          <Text
            variant="text.primary"
            sx={{
              fontSize: 1,
              textAlign: "center",
            }}
          >
            +43
          </Text>
          <Text
            variant="text.primary"
            sx={{
              fontSize: 1,
              textAlign: "center",
              mr: 1,
            }}
          >
            89
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
