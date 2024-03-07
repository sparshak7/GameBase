import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
  Badge,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../services/api";
import { CalendarIcon } from "@chakra-ui/icons";
import { colorPicker, textFix } from "../utils/helper";

const GameDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchDetails = async () => {
        const [newData] = await Promise.all([getDetails(id)]);
        setData(newData);
      };
      fetchDetails();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  console.log(data);

  if (loading) {
    return (
      <Flex justify="center">
        <Spinner size="xl" color="red" />
      </Flex>
    );
  }

  return (
    <Box>
      <Box
        bg={`linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url(${data?.background_image_additional})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        w="100%"
        h={{ base: "auto", md: "500px" }}
        py="2"
        display="flex"
        alignItems="center"
        zIndex="-1"
      >
        <Container maxW={"container.2xl"}>
          <Flex align="center" gap="10" flexDir={{ base: "column", md: "row" }}>
            <Image
              h="400px"
              borderRadius="sm"
              src={data?.background_image}
              position="relative"
            />
            <Box>
              <Heading fontSize="2xl" color="#fff">
                {data?.name_original} ({new Date(data?.released).getFullYear()})
              </Heading>
              <Flex align="center" mt="2" gap="4" mb="4">
                <Flex align="center">
                  <CalendarIcon mr="2" color="#fff" />
                  <Text fontSize="sm" color="#fff">
                    {new Date(data?.released).toLocaleDateString("en-US")}
                  </Text>
                </Flex>
              </Flex>
              <Flex align="center" gap="4">
                <Text color="#fff" fontSize="lg">
                  Metacritic Score:{" "}
                </Text>
                <CircularProgress
                  value={data?.metacritic}
                  borderRadius="full"
                  p="1"
                  size="60px"
                  color={colorPicker(data?.metacritic)}
                >
                  <CircularProgressLabel fontSize="lg" color="#fff">
                    {data?.metacritic}
                  </CircularProgressLabel>
                </CircularProgress>
              </Flex>
              <Heading
                fontSize={{ lg: "12px", xl: "small" }}
                color="#fff"
                mt="4"
              >
                {textFix(data?.description_raw)}
              </Heading>
              <Flex gap="2" mt="6" align="center">
                {data?.genres?.map((genre) => (
                  <Badge>{genre.name}</Badge>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default GameDetail;
