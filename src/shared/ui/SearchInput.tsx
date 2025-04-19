import React from "react";
import { Input } from "theme-ui";

export const SearchInput: React.FC = () => {
  return (
    <Input
      type="search"
      placeholder="search"
      sx={{
        width: "500px",
        px: 2,
        borderRadius: 20,
        border: "none",
        bg: "lightGray",
        color: "textDark",
        outline: "none",
      }}
    />
  );
};
