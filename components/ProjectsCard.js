import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  chakra,
  shouldForwardProp,
  useBreakpointValue,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/languageContext";

const ProjectsCard = ({
  img,
  title,
  description,
  sourceHref,
  siteHref,
  alt,
}) => {
  const [isOpen, setOpen] = useState(false);
  const language = useLanguage();
  const ChakraImg = chakra(motion.img, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const breakpoint = useBreakpointValue([4, 3, 2, 1]);
  const animation = {
    height: isOpen ? 400 / breakpoint + 100 : 100,
    width: isOpen ? 600 / breakpoint + 150 : 150,
    position: isOpen ? "absolute" : "flex",
    zIndex: isOpen ? 10 : 1,
    y: isOpen ? -50 : 0,
    x: isOpen ? -50 : 0,
  };
  return (
    <Box w="100%">
      <Heading p={5} w="100%" alignSelf="center" as="h3" size="md">
        {title}
      </Heading>
      <Flex minH="150px">
        <ChakraImg
          animate={animation}
          cursor={isOpen ? "zoom-out" : "zoom-in"}
          onClick={() => setOpen((prev) => !prev)}
          m={2}
          alt={alt}
          src={img}
        />        
        <Box justify="space-between" flexDir="column">
          <Text fontSize={[15, 16, 17, 18]}>{description}</Text>
          <Flex gap={2} justify="center">
            <Button
              size={["xs", "xs", "sm", "sm"]}
              as={Link}
              target="blank"
              rel="noreferred noopener"
              href={sourceHref}
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
              href={siteHref}
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
