import React from "react";
import { Card, Heading, Image, Text, Button, CardBody } from "@chakra-ui/react";

const ProjectCard = ({ title, description, image, github }) => {
  return (
    <Card.Root
      maxW="350px"
      w="100%"
      rounded="lg"
      overflow="hidden"
      shadow="md"
      transition="0.3s ease"
      _hover={{
        shadow: "lg",
        transform: "translateY(-4px)",
      }}
      bg="gray.500"
    >
      <Card.Body display="flex" flexDirection="column" gap="4" p="4">
        <Image
          objectFit="cover"
          rounded="md"
          h="280px"
          src={image}
          alt={title}
          mb="4"
        />
        <Heading size="xl">{title}</Heading>
        <Text fontSize="md">{description}</Text>
        <Button
          as="a"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          mt="auto"
          colorPalette="yellow"
        >
          View Project
        </Button>
      </Card.Body>
    </Card.Root>
  );
};

export default ProjectCard;
