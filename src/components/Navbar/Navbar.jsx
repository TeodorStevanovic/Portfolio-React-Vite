import React, { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faGear,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Flex, Heading, Link, HStack, Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const texts = {
    sr: {
      home: "Početna",
      about: "O meni",
      project: "Projekti",
      contact: "Kontakt",
    },
    en: {
      home: "Home",
      about: "About me",
      project: "Projects",
      contact: "Contact",
    },
  };
  const [openSettings, setOpenSettings] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <Flex
      as="nav"
      width="100%"
      position="fixed"
      justify="space-between"
      align="center"
      p={{ base: "1", md: "2", lg: "2" }}
      bg="gray.500"
    >
      <Heading size="md">
        <Link href="#home">Theodor.</Link>
      </Heading>

      <HStack as="ul" display={{ base: "none", md: "flex" }} gap="20px">
        <Link fontSize={{ base: "md", md: "xl", lg: "2xl" }} href="#home">
          {texts[language].home}
        </Link>
        <Link fontSize={{ base: "md", md: "xl", lg: "2xl" }} href="#about-me">
          {texts[language].about}
        </Link>
        <Link fontSize={{ base: "md", md: "xl", lg: "2xl" }} href="#projects">
          {texts[language].project}
        </Link>
        <Link fontSize={{ base: "md", md: "xl", lg: "2xl" }} href="#contact">
          {texts[language].contact}
        </Link>
      </HStack>

      <Box position="relative">
        <Button
          onClick={() => setOpenSettings((prev) => !prev)}
          variant="plain"
          size={{ base: "sm", md: "md", lg: "2xl" }}
          mr="2"
        >
          <FontAwesomeIcon
            icon={faGear}
            style={{
              transform: openSettings ? "rotate(260deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease-in-out",
            }}
          />
        </Button>

        {openSettings && (
          <>
            <Box
              position="fixed"
              top="0"
              left="0"
              width="100vw"
              height="100vh"
              bg="blackAlpha.600"
              zIndex="3"
              onClick={() => setOpenSettings(false)}
            />
            <Flex
              direction="column"
              position="fixed"
              top={{ base: "55px", md: "65px", lg: "80px" }}
              right="0"
              height={{
                base: "calc(100vh - 55px)",
                md: "calc(100vh - 65px)",
                lg: "calc(100vh - 80px)",
              }}
              bg={theme === "light" ? "white" : "gray.700"}
              p="2"
              rounded="md"
              shadow="md"
              minW="150px"
              zIndex="10"
            >
              <Button size="sm" onClick={toggleTheme} mb="2">
                Theme:{" "}
                {theme === "light" ? (
                  <FontAwesomeIcon icon={faSun} />
                ) : (
                  <FontAwesomeIcon icon={faMoon} />
                )}
              </Button>
              <Button size="sm" onClick={toggleLanguage}>
                Language: {language === "en" ? "EN" : "SR"}
              </Button>
            </Flex>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
