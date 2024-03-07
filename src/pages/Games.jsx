import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

const Games = () => {
  return (
    <Box>
      <Container maxW={"container.xl"} outline="1px solid white">
        <Heading as="h2" color="#fff" fontSize="md">
          GAMES
        </Heading>
      </Container>
    </Box>
  );
};

export default Games;
