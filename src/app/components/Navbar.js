import { Box, Card, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { PiLayout } from "react-icons/pi";

function Navbar() {
  const navigation = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: <GoHome />,
    },
    {
      name: "dashboard",
      to: "/",
      icon: <PiLayout />,
    },
    {
      name: "dashboard",
      to: "#",
      icon: <PiLayout />,
    },
  ];
  return (
    <Flex
      h="100%"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="15px"
      boxShadow="sm"
      bg="#fff"
    >
      <Flex
        m="2"
        justifyContent="center"
        gap="2px"
        flexWrap="wrap"
        flexDir="column"
      >
        {navigation.map((list) => (
          <Link key={list.name} href={list.to}>
            <Tooltip label={list.name} placement="right" bg="brand.900">
              <IconButton
                icon={list.icon}
                w="40px"
                h="40px"
                fontSize="20px"
                borderRadius="8px"
                color="brand.500"
                variant="ghost"
                colorScheme="brand"
                _hover={{ bg: "brand.300", color: "brand.100" }}
                _active={{ bg: "brand.500", color: "brand.100" }}
              ></IconButton>
            </Tooltip>
          </Link>
        ))}
      </Flex>
      <Flex
        justifyContent="center"
        borderRadius="15px"
        gap="10px"
        flexWrap="wrap"
      >
        <Card m="2" bg="brand.500" w="40px" h="120px"></Card>
      </Flex>
    </Flex>
  );
}

export default Navbar;
