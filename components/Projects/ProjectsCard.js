import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { ProjectCardImg } from "./ProjectCardImg";
import { ProjectsModal } from "./ProjectsModal";

const ProjectsCard = ({ img, modalImages, project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="60%">
      <Heading
        fontFamily="mono"
        p={5}
        w="100%"
        alignSelf="center"
        as="h3"
        size="md"
      >
        {project.title}
      </Heading>
      <Flex>
        <Box>
          <ProjectCardImg
            tecs={project.tecs}
            sourceHref={project.sourceHref}
            src={img}
            alt={project.alt}
            onOpen={onOpen}
          />
          <ProjectsModal
            imgs={modalImages}
            isOpen={isOpen}
            project={project}
            onClose={onClose}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectsCard;
