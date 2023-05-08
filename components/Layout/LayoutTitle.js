import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainProfile from "../../public/images/MainProfile.jpg";
const LayoutTitle = () => {
  return (
    <Container p={3}>
      <Flex>
        <Box>
          <Heading w="100%">Hello, I&apos;m Tomas Macia</Heading>
          <Text w="100%" fontSize="lg" fontWeight="bold">
            Full-stack React developer
          </Text>
        </Box>
        <Image borderRadius="full" h={100} src={MainProfile.src} />
      </Flex>
    </Container>
  );
};

export default LayoutTitle;
