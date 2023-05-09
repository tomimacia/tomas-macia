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
import NavLinks from "../data/NavLinks.json";
import useJsonData from "../hooks/useJsonData";
import { IoLogoGithub } from 'react-icons/io5'
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

        <Breadcrumb
          separator=""
          display={{ base: "none", sm: "flex", md: "flex" }}
          mr={3}
          fontSize={18}
          spacing={4}
        >
          {data?.Links.map((link) => {
            return (
              <BreadcrumbItem>
                <BreadcrumbLink as={NextLink} href={link.href}>
                  {link.Title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
          <BreadcrumbItem>
            <BreadcrumbLink
              as={NextLink}
              href={data.Source.href}
              target={data.Source.target}
              rel={data.Source.rel} 
              display="inline-flex" 
              alignItems="center" 
              style={{ gap: 3 }}           
            >
              {data.Source.Title}<IoLogoGithub/>
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
                {data?.Links.map((link) => {
                  return (
                    <MenuItem as={NextLink} href={link.href}>
                      {link.Title}
                    </MenuItem>
                  );
                })}                
                <MenuItem
                  as={NextLink}
                  href={data.Source.href}
                  target={data.Source.target}
                  rel={data.Source.rel}
                >
                  {data.Source.Title}<IoLogoGithub/>
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
