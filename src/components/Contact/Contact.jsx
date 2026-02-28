import React, { useContext } from "react";
import { Flex, Heading, Text, Input, Textarea, Button } from "@chakra-ui/react";
import LanguageContext from "../../context/LanguageContext";

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
    <Flex
      id="contact"
      minH="100vh"
      direction="column"
      pt="90px"
      gap={{ base: "10", lg: "0" }}
    >
      <Heading as="h1" textAlign="center" size="5xl">
        {texts[language].title}
      </Heading>

      <Flex
        flex="1"
        w="100%"
        direction={{ base: "column", md: "column", lg: "row" }}
        justify="space-around"
        align="center"
        gap={{ base: "10", md: "0" }}
      >
        <Flex
          direction="column"
          align={{ base: "center", md: "center", lg: "flex-start" }}
          gap="6"
        >
          <Heading as="h1" size="5xl" fontWeight="bold">
            {texts[language].titleLeft}
          </Heading>
          <Text
            as="p"
            w={{ base: "90%", md: "700px" }}
            fontSize="2xl"
            textAlign={{ base: "center", md: "center", lg: "left" }}
          >
            {texts[language].description}
          </Text>
        </Flex>

        <Flex
          as="form"
          w={{ base: "90%", md: "500px" }}
          direction="column"
          gap="6"
        >
          <Input
            type="text"
            placeholder={texts[language].inputName}
            name="name"
            p="10px"
            variant="flushed"
          />
          <Input
            type="email"
            placeholder={texts[language].inputEmail}
            name="email"
            p="10px"
            variant="flushed"
          />
          <Textarea
            name="message"
            rows="8"
            placeholder={texts[language].inputMessage}
            p="10px"
            variant="flushed"
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
