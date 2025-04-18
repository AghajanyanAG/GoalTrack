import React from "react";
import { Flex, NavLink } from "theme-ui";
import { GiSoccerField } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import { BiTransfer } from "react-icons/bi";

const MobileNav: React.FC = () => {
  return (
    <Flex
      as="nav"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        bg: "lightGray",
        width: "100%",
        py: 4,
        alignItems: "center",
        justifyContent: "center",
        gap: 100,
        "@media screen and (min-width: 1149px)": {
          display: "none",
        },
      }}
    >
      <NavLink
        href="#!"
        p={2}
        sx={{ color: "textDark", ":hover": { color: "lightgray" } }}
      >
        <GiSoccerField size={24} />
      </NavLink>
      <NavLink
        href="#!"
        p={2}
        sx={{ color: "textDark", ":hover": { color: "lightgray" } }}
      >
        <GiTrophyCup size={24} />
      </NavLink>
      <NavLink
        href="#!"
        p={2}
        sx={{ color: "textDark", ":hover": { color: "lightgray" } }}
      >
        <BiTransfer size={24} />
      </NavLink>
    </Flex>
  );
};

export default MobileNav;
