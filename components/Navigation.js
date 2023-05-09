import {
  Box,
  Container
} from "@chakra-ui/react";
import NavLinks from "../data/NavLinks.json";
import useJsonData from "../hooks/useJsonData";
import BaseNav from "./Navigation/BaseNav";
import { LanguageSwitch } from "./Navigation/LanguageSwitch";
import MobileNav from "./Navigation/MobileNav";
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

        <BaseNav data={data}/>
        <MobileNav 
        data={data}
        />
      </Container>
    </Box>
  );
};

export default Navigation;
