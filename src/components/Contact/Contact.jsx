import React, { useContext } from "react";
import { Flex, Heading, Text, Input, Textarea, Button } from "@chakra-ui/react";
import LanguageContext from "../../context/LanguageContext";
import theme_pattern from "../../assets/theme_pattern.svg";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const texts = {
    sr: {
      title: "Kontaktiraj me",
      titleLeft: "Započnimo razgovor",
      description:
        "Slobodno me kontaktiraj ako imaš bilo kakva pitanja, sugestije ili ideje za saradnju. Odgovoriću ti čim bude moguće.",
      lableTitleOne: "Tvoje Ime",
      lableTitleTwo: "Tvoj Email",
      textareaTitle: "Upisi tvoju poruku ovde",
      inputName: "Upisi svoje ime",
      inputEmail: "Upisi svoju email adresu",
      inputMessage: "Upisi svoju poruku",
      submitBtn: "Posalji sada",
    },
    en: {
      title: "Contact me",
      titleLeft: "Let's Talk",
      description:
        "Feel free to reach out if you have any questions, suggestions, or collaboration ideas. I’ll get back to you as soon as possible.",
      lableTitleOne: "Your Name",
      lableTitleTwo: "Your Email",
      textareaTitle: "Write your message here",
      inputName: "Enter your name",
      inputEmail: "Enter your email",
      inputMessage: "Enter your message",
      submitBtn: "Submit Now",
    },
  };
  return (
    <Flex id="contact" h="100vh" direction="column" pt="90px">
      <Heading as="h1" textAlign="center" size="5xl">
        {texts[language].title}
      </Heading>

      <Flex flex="1" w="100%" justify="space-around" align="center">
        <Flex direction="column" gap="6">
          <Heading as="h1" size="5xl" fontWeight="bold">
            {texts[language].titleLeft}
          </Heading>
          <Text as="p" maxW="700px" fontSize="2xl">
            {texts[language].description}
          </Text>
        </Flex>

        <Flex as="form" w="500px" direction="column" gap="6">
          <Input
            type="text"
            placeholder={texts[language].inputName}
            name="name"
            p="10px"
          />
          <Input
            type="email"
            placeholder={texts[language].inputEmail}
            name="email"
            p="10px"
          />
          <Textarea
            name="message"
            rows="8"
            placeholder={texts[language].inputMessage}
            p="10px"
          />
          <Button type="submit" w="200px" rounded="md" alignSelf="center">
            {texts[language].submitBtn}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
