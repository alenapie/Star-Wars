import { FC } from "react";
import { TCharacter } from "../types";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import { localizateGender, stringAvatar } from "../utils";

export const Character: FC<TCharacter> = ({ name, gender }) => (
  <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
    <ListItem>
      <ListItemAvatar>
        <Avatar>{stringAvatar(name)}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
      <ListItemText primary={localizateGender(gender)} />
    </ListItem>
  </List>
);
