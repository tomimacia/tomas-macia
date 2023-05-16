import { Box, Container } from "@chakra-ui/react";
import NavLinks from "../data/NavLinks.json";
import useJsonData from "../hooks/useJsonData";
import { BaseNavigation } from "./Navigation/BaseNavigation";
import { LanguageSwitch } from "./Navigation/LanguageSwitch";
import { MobileNavigation } from "./Navigation/MobileNavigation";
const Navigation = () => {
  const data = useJsonData(NavLinks);
  return (
    <Box
      as="nav"
      h="40px"
      bg="blackAlpha.200"
      top={0}
      position="fixed"
      w="100%"
    >
      <Container
        h="100%"
        maxW="container.md"
        alignItems="center"
        display="flex"
      >
        <LanguageSwitch />

        <BaseNavigation data={data} />
        <MobileNavigation data={data} />
      </Container>
    </Box>
  );
};

export default Navigation;
