import { Flex } from "@chakra-ui/react";
import React from "react";

export const CarouselArrow = ({ onClick,isLeft }) => {
  return <Flex
  top= "calc(55%)"
  pos= "absolute"
  bg= "white"
  color='black'
  _hover={{bg: "whiteAlpha.700"}}
  borderRadius= "30px"
  w='40px'
  h='40px'
  justifyContent="center"
  alignItems= "center"
  userSelect= "none"
  cursor= "pointer"
  fontWeight= "bold"
  fontSize= "18px"
  zIndex={2}
  right='10px'
  onClick={onClick}
  left={isLeft && '10px'}
  transform={isLeft && "scale(-1)"}
  >{"‣"}</Flex>;
};
