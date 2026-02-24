import React, { useContext, useState } from "react";
import LanguageContext from "../../context/LanguageContext";
import SettingsMenu from "./SettingsMenu";
import HamburgerMenu from "./HamburgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBars } from "@fortawesome/free-solid-svg-icons";
import { Flex, Heading, Link, HStack, Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  const { language } = useContext(LanguageContext);
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

      <HStack
        as="ul"
        display={{ base: "none", md: "flex" }}
        gap="20px"
        fontSize={{ base: "md", md: "xl", lg: "2xl" }}
      >
        <Link href="#home">{texts[language].home}</Link>
        <Link href="#about-me">{texts[language].about}</Link>
        <Link href="#projects">{texts[language].project}</Link>
        <Link href="#contact">{texts[language].contact}</Link>
      </HStack>

      <Box position="relative" display={{ base: "block", md: "none" }}>
        <Button
          variant="ghost"
          onClick={() => setOpenHamburger((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>

        <HamburgerMenu
          open={openHamburger}
          onClose={() => setOpenHamburger(false)}
          texts={texts}
          language={language}
        />
      </Box>

      <Box position="relative" display={{ base: "none", md: "block" }}>
        <Button
          onClick={() => setOpenSettings((prev) => !prev)}
          variant="ghost"
          bg="none"
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
        <SettingsMenu
          open={openSettings}
          onClose={() => setOpenSettings(false)}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
