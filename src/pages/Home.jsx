import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { getGames } from "../services/api";
import CardComponent from "../components/CardComponent";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchData = async () => {
        const [newData] = await Promise.all([getGames()]);
        setData(newData);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  console.log(data);

  return (
    <Box>
      <Container maxW={"container.xl"}>
        <Heading as="h2" color="#fff" fontSize="md" mb="1.5rem">
          TRENDING
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(5,1fr)",
          }}
          gap="4"
        >
          {data &&
            data?.map((game, id) =>
              loading ? (
                <Skeleton height={250} key={id} />
              ) : (
                <CardComponent key={game?.id} game={game} />
              )
            )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
