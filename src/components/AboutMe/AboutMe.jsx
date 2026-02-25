import React, { useContext } from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import LanguageContext from "../../context/LanguageContext";
import MyImage from "../../assets/profile-avatar.png";

const AboutMe = () => {
  const { language } = useContext(LanguageContext);
  const texts = {
    sr: {
      about: "O meni",
      title: `Motivisani junior front-end programer sa čvrstim znanjem HTML-a, CSS-a, JavaScript-a i React-a.
       Iskusan u izradi responzivnih, interaktivnih i korisnički prijatnih veb sajtova kroz praktične projekte i simulacije iz stvarnog sveta. 
        Poseduje snažne veštine rešavanja problema, izraženu pažnju prema detaljima i sposobnost rada samostalno ili u timu. Strastven u kontinuiranom 
        učenju modernih veb tehnologija i doprinosu inovativnim projektima u oblasti veb razvoja.`,
    },

    en: {
      about: "About Me",
      title: `Motivated Junior Front-End Developer with solid knowledge of HTML,
          CSS, JavaScript, and React. Experienced in creating responsive,
          interactive, and user-friendly websites through practical projects and
          real-world simulations. Strong problem-solving skills, attention to
          detail, and ability to work both independently and in collaborative
          teams. Passionate about continuously learning modern web technologies
          and contributing to innovative web development projects.`,
    },
  };

  return (
    <Flex id="about-me" h="100vh" direction="column" pt="90px" gap="12">
      <Heading as="h1" textAlign="center" size="5xl">
        About Me
      </Heading>
      <Flex w="100%" flex="1" justify="space-around" align="center" gap="10">
        <Text
          as="p"
          w="650px"
          fontSize="2xl"
          fontWeight="medium"
          textAlign="center"
          lineHeight="1.5"
        >
          {texts[language].title}
        </Text>
        <Image src={MyImage} boxSize="400px" alt="profile-picture" />
      </Flex>
    </Flex>
  );
};

export default AboutMe;
