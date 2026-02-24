import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
import { Flex, Image, Text, Heading } from "@chakra-ui/react";
import MyImage from "../../assets/profile-avatar.png";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const texts = {
    sr: {
      titleOne: "Zdravo, Ja sam Teodor Stevanović",
      titleTwo: "Junior Front-End Developer",
      description:
        "Pravim interaktivne i responzivne web aplikacije, pretvarajući idejeu korisniku prijatna digitalna iskustva.",
    },
    en: {
      titleOne: "Hi, I’m Teodor Stevanović",
      titleTwo: "Junior Front-End Developer",
      description:
        "I build interactive and responsive web applications, turning ideas into user-friendly digital experiences.",
    },
  };

  return (
    <Flex
      id="home"
      h="100vh"
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-around" }}
      align="center"
      px={{ base: "4", md: "0" }}
      py={{ base: "8", md: "0" }}
      bg={theme === "light" ? "yellow.100" : "gray.900"}
    >
      <Image
        src={MyImage}
        boxSize={{ base: "200px", md: "400px" }}
        mb={{ base: "6", md: "0" }}
      />
      <Flex
        direction="column"
        justify="center"
        align={{ base: "center", md: "flex-start" }}
        gap={4}
      >
        <Heading as="h2" size={{ base: "xl", md: "3xl" }}>
          {texts[language].titleOne}
        </Heading>
        <Heading as="h1" size={{ base: "2xl", md: "5xl" }} color="yellow.700">
          {texts[language].titleTwo}
        </Heading>
        <Text as="p" fontSize={{ base: "lg", md: "2xl" }} textAlign="center">
          {texts[language].description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Hero;
