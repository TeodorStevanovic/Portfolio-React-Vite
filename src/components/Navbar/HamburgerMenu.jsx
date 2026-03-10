import React from "react";
import { Box, Link, VStack } from "@chakra-ui/react";

const HamburgerMenu = ({ open, onClose, texts, language }) => {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        bg="blackAlpha.400"
        backdropFilter="blur(6px)"
        opacity={open ? 1 : 0}
        pointerEvents={open ? "auto" : "none"}
        transition="opacity 0.3s ease"
        zIndex="15"
        onClick={onClose}
        aria-label="Close hamburger menu"
      />

      <VStack
        position="fixed"
        top="0"
        right="0"
        h="100vh"
        w="60%"
        maxW="400px"
        bg="gray.800"
        p="8"
        spacing="6"
        align="center"
        zIndex="1100"
        boxShadow="3xl"
        transform={open ? "translateX(0)" : "translateX(100%)"}
        transition="transform 0.40s ease-in-out"
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
