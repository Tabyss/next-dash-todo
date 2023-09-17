import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

function Header() {
  return (
    <Flex gap="30px" h="60px">
      <Flex p="2">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </Flex>
      <Flex
        p="6"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="15px"
        boxShadow="sm"
        bg="#fff"
      >
        <Flex>
          <Text fontSize="xl" color="brand.900" as="b">
            Dashboard
          </Text>
        </Flex>
        <Flex gap="10px">
          <Flex flexDir="column">
            <Text fontSize="sm" as="b">
              Thabys
            </Text>
            <Text fontSize="xs" as="b">
              Log Out
            </Text>
          </Flex>
          <Image
            src="/Illustrations.jpg"
            alt="Vercel Logo"
            width={50}
            height={50}
            borderRadius="50px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
