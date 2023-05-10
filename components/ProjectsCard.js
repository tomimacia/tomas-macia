import {
  Box,
  Flex,
  Heading,
  chakra,
  shouldForwardProp
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useState } from "react";
import { ProjectCardImg } from "./ProjectCardImg";

const ProjectsCard = ({ img, project }) => {
  const [show, setShow] = useState(false);
  const ChakraImg = chakra(motion.img, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });  
  
  return (
    <Box w="60%">
      <Heading fontFamily="mono" p={5} w="100%" alignSelf="center" as="h3" size="md">
        {project.title}
      </Heading>
      <Flex>
        <Box>          
          <ProjectCardImg tecs={project.tecs} sourceHref={project.sourceHref} src={img} alt={project.alt}/>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectsCard;

{
  /* <Button
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
                </Button> */
}
