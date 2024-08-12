import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TCharacter } from "../types";
import axios from "axios";
import { localizateGender } from "../utils";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  Box,
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        py: 4,
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          margin: 2,
          display: "flex",
          flex: 1,
          height: "100%",
          alignItem: "center",
        }}
      >
        <Box alignItems="center" justifyContent="center" width="100%">
          <CardContent
            sx={{
              alignItems: "center",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItem: "center",
              py: 3,
              mx: 5,
              gap: 4,
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {detail.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Birth year: {detail.birth_year}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Mass: {detail.mass}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Hair color: {detail.hair_color}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Skin color: {detail.skin_color}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Eye color: {detail.eye_color}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Genger: {localizateGender(detail.gender)}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <CardActions>
        <Link to={`/`}>
          <Button variant="outlined">GO BACK</Button>
        </Link>
      </CardActions>
    </Box>
  );
};
