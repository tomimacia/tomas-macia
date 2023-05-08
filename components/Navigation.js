import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { LanguageSwitch } from "./Navigation/LanguageSwitch";
import ColorModeSwitch from "./Navigation/ColorModeSwitch";

const Navigation = () => {
  return (
    <Box
      as="nav"
      h="35px"
      bg="blackAlpha.200"
      top={1}
      position="fixed"
      w="100%"      
    >
      <Container maxW="container.md" alignItems="center" display="flex">
        <LanguageSwitch />

        <Breadcrumb
          separator=""
          display={{ base: "none", sm: "flex", md: "flex" }}
          mr={3}
          fontSize={18}
          spacing={4}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href="Skills">
              Skills
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href="Projects">
              Projects
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex flexDir="row">
          <ColorModeSwitch />

          <Box display={{ md: "none", sm: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                fontSize={18}
                outlineColor={useColorModeValue("blackAlpha.400", "gray.400")}
                size="sm"
                icon={<HamburgerIcon />}
              />
              <MenuList>
                <MenuItem as={NextLink} href="/">
                  Home
                </MenuItem>
                <MenuItem as={NextLink} href="/Skills">
                  Skills
                </MenuItem>
                <MenuItem as={NextLink} href="/Projects">
                  Projects
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  target="blank"
                  rel="noreferrer noopener"
                  href="https://github.com/tomimacia/tomas-macia"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
