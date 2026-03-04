import React, { useState } from "react";
import { Heading, Image, Text, Button, Box } from "@chakra-ui/react";

const ProjectCard = ({ title, description, image, github }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      position="relative"
      overflow="hidden"
      w="100%"
      h={{ base: "170px", md: "200px", lg: "260px" }}
      rounded="md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image src={image} alt={title} objectFit="cover" w="100%" h="100%" />

      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.45)"
        backdropFilter="blur(15px)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        color="white"
        p={{base: "3", md: "4"}}
        transform={hovered ? "translateY(0)" : "translateY(100%)"}
        transition="transform 0.6s ease-out"
      >
        <Heading size={{ base: "sm", md: "md" }} mb="2">
          {title}
        </Heading>
        <Text fontSize={{ base: "xs", md: "sm" }} mb="3">
          {description}
        </Text>
        <Button
          as="a"
          href={github}
          px={{ base: "4", md: "6", lg: "8" }}
          target="_blank"
          rel="noopener noreferrer"
          size={{ base: "sm", md: "md", lg: "lg" }}
          colorPalette="yellow"
        >
          View Project
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectCard;
