import { Container, Heading, Text } from "@chakra-ui/react";

const LayoutTitle = () => {
  return (
    <Container p={3}>
      <Heading w="100%">Hello, Im Tomas Macia</Heading>
      <Text w="100%" fontSize="lg" fontWeight="bold">
        Full-stack React developer
      </Text>
    </Container>
  );
};

export default LayoutTitle;
