import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { TCharacter } from "../types";
import axios from "axios";
import { localizateGender } from "../utils";
import {
  CardContent,
  Button,
  Card,
  Box,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectCharacterCard, setCharacterCard } from "../store";

export const Detail = () => {
  const { id } = useParams();
  const chatacter = useAppSelector(selectCharacterCard);
  const dispatch = useAppDispatch();
  const URLCharacter = `https://swapi.dev/api/people/${id}`;

  useEffect(() => {
    const getDetail = async () => {
      const { data } = await axios.get<TCharacter>(URLCharacter);

      dispatch(
        setCharacterCard({
          card: data,
        })
      );
    };

    getDetail();
  }, []);

  if (!chatacter) {
    return null;
  }

  return (
    <Box
      sx={{
        alignItems: "center",
        flexDirection: "column",
      }}
      gap={2}
      py={4}
      display="flex"
    >
      <Card sx={{ minWidth: 300 }}>
        <CardContent>
          <List>
            <ListItem>
              <ListItemText primary="Name:" secondary={chatacter.name} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Birth year:"
                secondary={chatacter.birth_year}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Mass:" secondary={chatacter.mass} />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Hair color:"
                secondary={chatacter.hair_color}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Skin color:"
                secondary={chatacter.skin_color}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Eye color:"
                secondary={chatacter.eye_color}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Genger:" />
              <ListItemIcon>{localizateGender(chatacter.gender)}</ListItemIcon>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Link to={`/`}>
        <Button variant="outlined">GO BACK</Button>
      </Link>
    </Box>
  );
};
