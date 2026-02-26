import React from "react";
import { Flex, Heading, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      justify="space-between"
      align="center"
      p={{ base: "3", md: "4" }}
      bg="gray.500"
    >
      <Heading as="h1" size={{ base: "lg", md: "xl", lg: "2xl" }}>
        <Link href="#home">Theodor.</Link>
      </Heading>
      <Text as="p" fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
        &copy; 2026 Teodor Stevanovic. All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
