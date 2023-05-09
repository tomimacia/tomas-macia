import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainProfile from "../../public/images/MainProfile.jpg";
import { SocialMedia } from "./SocialMedia";
const LayoutTitle = () => {
  return (
    <Container p={3}>
      <Flex justify="space-between">
        <Box>
          <Heading w="100%">Hello, I&apos;m Tomas Macia</Heading>
          <Text w="100%" fontSize="lg" fontWeight="bold">
            Full-stack React developer
          </Text>
        </Box>
        <Image borderRadius="full" h={100} alt='main-profile-img' src={MainProfile.src} />
      </Flex>
      <SocialMedia />
    </Container>
  );
};

export default LayoutTitle;
