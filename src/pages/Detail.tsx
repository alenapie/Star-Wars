import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

export const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<TCharacter>();
  const URLCharacter = `https://swapi.dev/api/people/${id}`;

  useEffect(() => {
    const getDetail = async () => {
      const { data } = await axios.get<TCharacter>(URLCharacter);
      setDetail(data);
    };
    getDetail();
  }, []);

  if (!detail) {
    return null;
  }
  console.log(detail);

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
              <ListItemText primary="Name:" secondary={detail.name} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Birth year:"
                secondary={detail.birth_year}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Mass:" secondary={detail.mass} />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Hair color:"
                secondary={detail.hair_color}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Skin color:"
                secondary={detail.skin_color}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Eye color:" secondary={detail.eye_color} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Genger:" />
              <ListItemIcon>{localizateGender(detail.gender)}</ListItemIcon>
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
