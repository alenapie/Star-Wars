import { FC } from "react";
import { TCharacter } from "../types";
import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import { localizateGender, stringAvatar } from "../utils";
import { Link } from "react-router-dom";

export const Character: FC<TCharacter> = ({ url, name, gender }) => {
  const id = url.match(/people\/(\d+)\//)?.[1];

  return (
    <ListItemButton component={Link} to={`details/${id}`}>
      <ListItemAvatar>
        <Avatar>{stringAvatar(name)}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
      {localizateGender(gender)}
    </ListItemButton>
  );
};
