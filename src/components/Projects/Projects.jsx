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
      minH="100vh"
      direction="column"
      align="center"
      gap="10"
      pt={{ base: "50px", md: "70px", lg: "90px" }}
      bg={theme === "light" ? "yellow.100" : "gray.900"}
    >
      <Heading as="h1" size="5xl">
        My Projects
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        w="100%"
        maxW={{ base: "450px", md: "900px", lg: "1200px" }}
        gap={{ base: "10", md: "16", lg: "20" }}
        mx="auto"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
