import React from "react";
import { Flex, Text, Box, Link } from "theme-ui";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      sx={{
        p: 4,
        bg: "primary",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        "@media screen and (max-width: 1149px)": {
          pb: 150,
        },
      }}
    >
      <Text
        variant="text.primary"
        sx={{ fontSize: 1, color: "lightGray", mb: [2, 0] }}
      >
        © Copyright 2025 GoalTrack
      </Text>

      <Text
        variant="text.primary"
        sx={{
          fontSize: 2,
          color: "lightGray",
          maxWidth: 300,
          mb: [3, 0],
        }}
      >
        The use of automatic services (robots, crawler, indexing etc.) as well
        as other methods for systematic or regular use is not permitted.
      </Text>

      <Flex
        sx={{
          alignItems: "center",
          gap: 50,
          flexDirection: ["column", "row"],
          width: ["100%", "auto"],
          justifyContent: "center",
        }}
      >
        <Link>
          <Text
            variant="text.primary"
            sx={{
              fontSize: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            Follow us
          </Text>
        </Link>
        <Flex
          as="ul"
          sx={{
            listStyleType: "none",
            padding: 0,
            gap: 3,
            alignItems: "center",
            m: 0,
          }}
        >
          <Box as="li" sx={{ display: "flex", alignItems: "center" }}>
            <Link
              href="https://www.instagram.com/"
              sx={{
                color: "lightGray",
                fontSize: 3,
                display: "flex",
                alignItems: "center",
                "&:hover": { color: "textDark", cursor: "pointer" },
              }}
            >
              <LuInstagram />
            </Link>
          </Box>

          <Box as="li" sx={{ display: "flex", alignItems: "center" }}>
            <Link
              href="https://www.linkedin.com/"
              sx={{
                color: "lightGray",
                fontSize: 3,
                display: "flex",
                alignItems: "center",
                "&:hover": { color: "textDark", cursor: "pointer" },
              }}
            >
              <FaLinkedin />
            </Link>
          </Box>

          <Box as="li" sx={{ display: "flex", alignItems: "center" }}>
            <Link
              href="https://www.facebook.com/"
              sx={{
                color: "lightGray",
                fontSize: 3,
                display: "flex",
                alignItems: "center",
                "&:hover": { color: "textDark", cursor: "pointer" },
              }}
            >
              <FaFacebookF />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
