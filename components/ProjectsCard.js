import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useLanguage } from "../context/languageContext";
import { ProjectCardImg } from "./ProjectCardImg";

const ProjectsCard = ({ img, project }) => {
  const language = useLanguage();
  return (
    <Box w="100%">
      <Heading p={5} w="100%" alignSelf="center" as="h3" size="md">
        {project.title}
      </Heading>
      <Flex position="relative" minH="150px">
        <ProjectCardImg alt={project.alt} img={img} />
        <Box
          w={["60%", "70%", "70%", "70%"]}
          right={0}
          position="absolute"
          flexDir="column"
        >
          <Text fontSize={[15, 16, 17, 18]}>{project.description}</Text>
          <Flex gap={2} justify="center">
            <Button
              size={["xs", "xs", "sm", "sm"]}
              as={Link}
              target="blank"
              rel="noreferred noopener"
              href={project.sourceHref}
            >
              {language === "English" ? "View Source" : "Ver Fuente"}
            </Button>
            <Button
              bg="blue.400"
              _hover={{ bg: "blue.200" }}
              size={["xs", "xs", "sm", "sm"]}
              as={Link}
              target="blank"
              rel="noreferred noopener"
              href={project.siteHref}
            >
              {language === "English" ? "Visit Site" : "Ir al Sitio"}
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectsCard;
