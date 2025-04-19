import React from "react";
import { Box, Flex, Link, Image, IconButton } from "theme-ui";
import { SearchInput } from "../ui/SearchInput";
import { ToggleButton } from "../ui/ToggleButton";
import { IoIosSearch, IoIosSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";

export const Header: React.FC = () => {
  return (
    <Box
      as={"header"}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        bg: "primary",
        color: "textLight",
        px: 4,
      }}
    >
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: 60,
          }}
        >
          <Link href="/">
            <Image src="src/app\assets\GoalTrack-dark-logo.svg" />
          </Link>
          <Box
            sx={{
              display: "none",
              "@media screen and (min-width: 1150px)": {
                display: "block",
                width: "500px",
              },
            }}
          >
            <SearchInput />
          </Box>
        </Flex>
        <Flex sx={{ alignItems: "center", gap: [3, 4, 60] }}>
          <IconButton
            sx={{
              display: "none",
              "@media screen and (max-width: 1149px)": {
                display: "block",
                color: "lightGray",
              },
            }}
            aria-label="Search"
          >
            <IoIosSearch size={24} />
          </IconButton>
          <Link
            href="/transfers"
            sx={{
              "@media screen and (max-width: 1149px)": {
                display: "none",
              },
            }}
          >
            Transfers
          </Link>
          <ToggleButton>
            <IoIosSunny size={24} />
            <GoMoon size={24} />
          </ToggleButton>
        </Flex>
      </Flex>
    </Box>
  );
};
