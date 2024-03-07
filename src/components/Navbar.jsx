import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box py="4" mb="2">
      <Container maxW={"container.xl"}>
        <Flex justify="space-between" align="center">
          <Link to="/">
            <Box
              fontSize={["sm", "md", "xl", "2xl"]}
              fontWeight="bold"
              color="#fff"
            >
              Game<span style={{ color: "#ef312f" }}>Base</span>
            </Box>
          </Link>
          <Flex align="center" gap={["4", "6", "8"]}>
            <Link to="/search">
              <SearchIcon boxSize={["3", "4", "6"]} color="#fff" />
            </Link>
            <Link to="/games">
              <Text fontSize={["14px", "16px", "18px", "20px"]} color="#fff">
                Browse Games
              </Text>
            </Link>
            <Text fontSize={["14px", "16px", "18px", "20px"]} color="#fff">
              Info
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
