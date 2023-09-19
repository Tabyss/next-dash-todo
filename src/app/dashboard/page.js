"use client";

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
  CardFooter,
} from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoKebabHorizontal } from "react-icons/go";

export default function Dashboard() {
  const todo = [
    {
      title: "title 1",
      caption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, numquam!",
      keyword: ["key 1", "key 2", "key 3"],
    },
    {
      title: "title 2",
      caption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, numquam!",
      keyword: ["key 1", "key 2", "key 3"],
    },
  ];
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
      <Flex gap="10px" flexWrap="wrap">
        {todo.map((list) => (
          <Card
            h="250px"
            w="250px"
            p="8"
            bg="#fff"
            borderRadius="15px"
            boxShadow="sm"
            key={list.title}
          >
            <CardHeader p="0">
              <Heading size="sm" color="brand.900">
                {list.title}
              </Heading>
            </CardHeader>
            <CardBody p="0">
              <Text my="4" color="brand.900">
                {list.caption}
              </Text>
              <Divider />
            </CardBody>
            <CardFooter>
              {list.keyword.map((key) => (
                <Text my="4" color="brand.900">
                  {key}
                </Text>
              ))}
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </Box>
  );
}
