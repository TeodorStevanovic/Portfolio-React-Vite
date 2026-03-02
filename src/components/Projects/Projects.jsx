import React from "react";
import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Flex id="projects" h="100vh" direction="column" align="center" gap="10" pt="90px">
      <Heading as="h1">My Projects</Heading>
      <SimpleGrid columns={3} gap="10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
