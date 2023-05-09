import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../context/languageContext";

const ProjectsCard = ({ img, title, description, sourceHref, siteHref,alt }) => {
  const language = useLanguage()
  return (
    <Box w="100%">
      <Heading p={5} w="100%" alignSelf="center" as="h3" size="md">
        {title}
      </Heading>
      <Flex minH='200px'>
        <Image alt={alt} pr={3} h="100px" src={img} />
        <Flex justify="space-between" flexDir="column">
          <Text>{description}</Text>
          <Flex gap={2}>
            <Button
              size="sm"
              as={Link}
              target="blank"
              rel="noreferred noopener"
              href={sourceHref}
              w='107px'
            >
              {language === "English" ? "View Source" : "Ver Fuente"}
            </Button>
            <Button
              bg='blue.400'
              w='83px'
              _hover={{bg:'blue.200'}}
              size="sm"
              as={Link}
              target="blank"
              rel="noreferred noopener"
              href={siteHref}
            >
              {language === "English" ? "Visit Site" : "Ir al Sitio"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectsCard;
