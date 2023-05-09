import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainProfile from "../../public/images/MainProfile.jpg";
import { SocialMedia } from "./SocialMedia";
import LayoutTitleJson from "../../data/LayoutTitle.json"
import useJsonData from "../../hooks/useJsonData";
const LayoutTitle = () => {
  const data = useJsonData(LayoutTitleJson)
  return (
    <Container p={3}>
      <Flex justify="space-between">
        <Box>
          <Heading w="100%">{data?.Title}</Heading>
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
