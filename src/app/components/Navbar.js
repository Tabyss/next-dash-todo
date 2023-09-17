import { Box, Card, Flex, IconButton } from "@chakra-ui/react";
import { GoHome } from "react-icons/go";
import { PiLayout } from "react-icons/pi";

function Navbar() {
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
      <Flex m="2" justifyContent="center" gap="2px" flexWrap="wrap" flexDir="column">
        <IconButton
          icon={<GoHome size="24px" />}
          w="40px"
          h="40px"
          borderRadius="8px"
          color="brand.500"
          variant="ghost"
          colorScheme="brand"
          _hover={{ bg: "brand.300", color: "brand.100" }}
          _active={{ bg: "brand.500", color: "brand.100" }}
        ></IconButton>
        <IconButton
          icon={<PiLayout size="24px" />}
          w="40px"
          h="40px"
          borderRadius="8px"
          color="brand.500"
          variant="ghost"
          colorScheme="brand"
          _hover={{ bg: "brand.300", color: "brand.100" }}
          _active={{ bg: "brand.500", color: "brand.100" }}
        ></IconButton>
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
