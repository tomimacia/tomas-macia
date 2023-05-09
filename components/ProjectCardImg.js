import {
    Box,
    chakra,
    shouldForwardProp,
    useBreakpointValue
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
  

export const ProjectCardImg = ({alt,img}) => {
  const [isOpen, setOpen] = useState(false);
  const ChakraImg = chakra(motion.img, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const breakpoint = useBreakpointValue([4, 3, 2, 1]);
  const animation = {
    height: isOpen ? 300 / breakpoint + 100 : 100,
    width: isOpen ? 600 / breakpoint + 150 : 150,
    y: isOpen ? -(50 / breakpoint) : 0,
  };
  const domNode = useClickOutside(() => {
    setOpen(false);
  });
  return (
    <Box zIndex={isOpen ? 10 : 1} left={0} position="absolute">
      <ChakraImg
        ref={domNode}
        animate={animation}
        cursor={isOpen ? "zoom-out" : "zoom-in"}
        onClick={() => setOpen((prev) => !prev)}
        m={2}
        alt={alt}
        src={img}
      />
    </Box>
  );
};
