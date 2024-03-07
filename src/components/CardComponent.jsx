import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`}>
      <Box
        position="relative"
        transform="scale(1)"
        _hover={{
          transform: { base: "scale(1)", md: "scale(1.08)" },
          transition: "transform 0.2s ease-in-out",
          "& .overlay": { opacity: 1 },
          zIndex: 10,
        }}
      >
        <Image src={game?.background_image} alt={game?.name} h="100%" />
        <Box
          className="overlay"
          position="absolute"
          color="#fff"
          p="2"
          bottom="0"
          left="0"
          w="100%"
          opacity="0"
          h="50%"
          bg="rgba(0,0,0,0.9)"
          transition="opacity 0.3s ease-in-out"
          overflow="hidden"
        >
          <Text textAlign="center">{game?.name}</Text>
          <Text textAlign="center" fontSize="x-small" color="green.200">
            {new Date(game?.released).getFullYear()}
          </Text>
          <Flex align="center" justify="center" gap="2">
            <StarIcon fontSize="small" />
            <Text fontSize="small">{game?.rating}/5</Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default CardComponent;
