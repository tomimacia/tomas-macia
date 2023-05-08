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
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChangeLanguageSwitch } from "./ChangeLanguageSwitch";
import ColorModeSwitch from "./ColorModeSwitch";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navigation = () => {
  return (
    <Box
      as="nav"
      h="35px"
      bg="blackAlpha.200"
      top={0}
      position="fixed"
      w="100%"
    >
      <Container maxW="container.md" alignItems="center" display="flex">
        <ChangeLanguageSwitch />

        <Breadcrumb
        separator=''
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
            <BreadcrumbLink as={NextLink} href="Contact">
              Contacto
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>        
        <Flex flexDir='row'>
          <ColorModeSwitch />

          <Box display={{ md: "none",sm:"none" }}>
            <Menu >
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/">
                  Home
                </MenuItem>
                <MenuItem as={NextLink} href="/Skills">
                  Skills
                </MenuItem>
                <MenuItem as={NextLink} href="/Contact">
                  Contact
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  target="blank"
                  rel="noreferrer noopener"
                  href="https://github.com/craftzdog/craftzdog-homepage"
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
