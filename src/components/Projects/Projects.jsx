import React from "react";
import { Flex, Heading, SimpleGrid, Card } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Flex id="projects" h="100vh" direction="column" align="center" pt="90px">
      <Heading as="h1">My Projects</Heading>
      <SimpleGrid column={3} spacing="10"></SimpleGrid>
    </Flex>
  );
};

export default Projects;
