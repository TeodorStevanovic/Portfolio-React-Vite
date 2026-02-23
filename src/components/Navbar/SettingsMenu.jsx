import React, { useContext } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import ThemeContext from "../../context/ThemeContext";
import LanguageContext from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const SettingsMenu = ({ open, onClose }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  if (!open) return null;

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        bg="blackAlpha.600"
        zIndex="3"
        onClick={onClose}
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
  );
};

export default SettingsMenu;
