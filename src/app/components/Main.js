import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoKebabHorizontal } from "react-icons/go";
import React from "react";

function Main() {
  return (
    <Box w="100%" h="100%">
      <Flex p="4" borderRadius="15px" bg="#fff" h="200px" boxShadow="sm">
        main
      </Flex>
      <Flex m="4" justifyContent="space-between" alignItems="center">
        <Heading color="brand.900" size="md">
          TO DO List
        </Heading>
        <Box>
          <IconButton
            icon={<IoIosAddCircleOutline size="24px" />}
            color="brand.900"
            variant="unstyled"
            _hover={{ opacity: "50%" }}
          ></IconButton>
          <IconButton
            icon={<GoKebabHorizontal size="24px" />}
            color="brand.900"
            variant="unstyled"
            _hover={{ opacity: "50%" }}
          ></IconButton>
        </Box>
      </Flex>
      <Flex>
        <Card h="250px" w="250px" bg="#fff" borderRadius="15px" boxShadow="sm">
          <CardHeader>
            <Heading size="sm" color="brand.900">
              Title
            </Heading>
          </CardHeader>
          <CardBody>
            <Text my="4" color="brand.900">
              Caption
            </Text>
            <Divider />
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}

export default Main;
