import React, { useState } from "react";
import { Heading, Image, Text, Button, Box } from "@chakra-ui/react";

const ProjectCard = ({ title, description, image, github }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      position="relative"
      overflow="hidden"
      w="100%"
      h="260px"
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
        p="4"
        transform={hovered ? "translateY(0)" : "translateY(100%)"}
        transition="transform 0.3s ease"
      >
        <Heading size="md" mb="2">
          {title}
        </Heading>
        <Text fontSize="sm" mb="3">
          {description}
        </Text>
        <Button
          as="a"
          href={github}
          px="8"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          colorPalette="yellow"
        >
          View Project
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectCard;
