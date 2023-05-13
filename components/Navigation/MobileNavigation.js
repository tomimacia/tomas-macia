import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import ColorModeSwitch from "./ColorModeSwitch";
import { HamburgerIcon } from "@chakra-ui/icons";

export const MobileNavigation = ({ data }) => {
  return (
    <Flex flexDir="row">
      <ColorModeSwitch />
      <Box ml={2} display={{ md: "none", sm: "none" }}>
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
                <MenuItem
                  key={"MobileLink" + link.Title}
                  as={Link}
                  href={link.href}
                >
                  {link.Title}
                </MenuItem>
              );
            })}
            <MenuItem
              as={Link}
              href={data.Source.href}
              target={data.Source.target}
              rel={data.Source.rel}
            >
              {data.Source.Title}
              <IoLogoGithub />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

