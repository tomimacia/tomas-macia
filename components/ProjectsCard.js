import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ProjectsCard = ({ img, title, description, sourceHref, siteHref }) => {
  return (
    <Box w="100%">
      <Heading p={5} w="100%" alignSelf="center" as="h3" size="md">
        {title}
      </Heading>
      <Flex>
        <Image pr={3} h="100px" src={img} />
        <Flex justify="space-between" flexDir="column">
          <Text>{description}</Text>
          <Flex gap={2}>
            <Button
              size="sm"
              as={Link}
              target="blank"
              rel="noreferred noopener"
              href={sourceHref}
            >
              View Source
            </Button>
            <Button
              bg='blue.400'
              _hover={{bg:'blue.200'}}
              size="sm"
              as={Link}
              target="blank"
              rel="noreferred noopener"
              href={siteHref}
            >
              Visit Site
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectsCard;
