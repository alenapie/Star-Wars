import { useEffect, useState } from "react";
import { TCharacter, TCharacterResponse } from "../types";
import axios from "axios";
import { Box, Grid, Pagination } from "@mui/material";
import { Character } from "../components/Character";

const LIMIT = 10;

export const Home = () => {
  const [characters, setCharacters] = useState<TCharacter[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const URL = `https://swapi.dev/api/people/?page=${page}`;

  useEffect(() => {
    const getCharacter = async () => {
      const { data } = await axios.get<TCharacterResponse>(URL);
      setCharacters(data.results);
      setCount(Math.ceil(data.count / LIMIT));
    };
    getCharacter();
  }, [page]);

  if (!characters) {
    return <div> Пустой список</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      <Box sx={{ flexGrow: 1, p: 1 }}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {characters.map((character) => (
            <Character {...character} key={character.name} />
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Pagination
          count={count}
          shape="rounded"
          onChange={(_, page) => setPage(page)}
        />
      </Box>
    </div>
  );
};
