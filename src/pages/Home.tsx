import { useEffect, useState } from "react";
import { TCharacterResponse } from "../types";
import axios from "axios";
import {
  Box,
  List,
  ListItem,
  Pagination,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Character } from "../components/Character";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  selectCharactersCount,
  selectCharactersList,
  setCharactersList,
} from "../store";

const LIMIT = 10;

export const Home = () => {
  const characters = useAppSelector(selectCharactersList);
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCharactersCount);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const URL = `https://swapi.dev/api/people/?page=${page}&search=${search}`;

  useEffect(() => {
    const getCharacter = async () => {
      const { data } = await axios.get<TCharacterResponse>(URL);
      const count = Math.ceil(data.count / LIMIT);

      dispatch(
        setCharactersList({
          list: data.results,
          count,
        }),
      );
    };

    getCharacter();
  }, [page, search]);

  if (!characters) {
    return <div> Пустой список</div>;
  }

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      py={3}
      gap={3}
      sx={{ overflow: "hidden" }}
    >
      <Typography gutterBottom variant="h5" component="div">
        List of Star Wars characters
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search for a character"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Paper
        sx={{
          display: "flex",
          flex: 1,
          overflow: "auto",
        }}
      >
        <List sx={{ width: "100%", minWidth: 300 }}>
          {characters.map((character) => (
            <ListItem key={character.name}>
              <Character {...character} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Pagination
        count={count}
        shape="rounded"
        onChange={(_, page) => setPage(page)}
      />
    </Box>
  );
};
