import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { projects } from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Flex
      id="projects"
      h="100vh"
      direction="column"
      align="center"
      gap="10"
      pt="90px"
      bg={theme === "light" ? "yellow.100" : "gray.900"}
    >
      <Heading as="h1" size="5xl">
        My Projects
      </Heading>
      <SimpleGrid columns={3} gap="20">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
