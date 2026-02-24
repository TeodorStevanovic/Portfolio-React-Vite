import React from "react";
import { Box, Flex, Link, VStack } from "@chakra-ui/react";

const HamburgerMenu = ({ open, onClose, texts, language }) => {
  if (!open) return null;

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        bg="blackAlpha.600"
        zIndex="15"
        onClick={onClose}
        aria-label="Close hamburger menu"
      />

      <VStack
        position="fixed"
        top="0"
        left="0"
        h="100vh"
        w="70%"
        maxW="400px"
        bg="gray.800"
        p="8"
        spacing="6"
        align="flex-start"
        zIndex="20"
      >
        <Link href="#home" onClick={onClose} fontSize="2xl" color="white">
          {texts[language].home}
        </Link>
        <Link href="#about-me" onClick={onClose} fontSize="2xl" color="white">
          {texts[language].about}
        </Link>
        <Link href="#projects" onClick={onClose} fontSize="2xl" color="white">
          {texts[language].project}
        </Link>
        <Link href="#contact" onClick={onClose} fontSize="2xl" color="white">
          {texts[language].contact}
        </Link>
      </VStack>
    </>
  );
};

export default HamburgerMenu;
