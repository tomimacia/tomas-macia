import {
  Button,
  Center,
  Image,
  ListItem,
  UnorderedList,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../context/languageContext";
import { useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export const ProjectCardImg = ({ alt, src, sourceHref, tecs = [1, 2] }) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const [isTapped, setIsTapped] = useState(false);
  const imageMotion = {
    rest: {
      opacity: 1,
    },
    hover: {
      opacity: 0.2,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };
  const listMotion = {
    rest: {
      opacity: 0,
      x: 0,
      y: 40,
    },
    hover: (index) => ({
      opacity: 1,
      x: 15,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
        delay: index / 2,
        duration: 1 / 2,
      },
    }),
  };
  const innerMotion = {
    rest: {
      opacity: 0,
      y: -32,
    },
    hover: {
      opacity: 1,
      y: -50,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
        delay: 1.5,
        duration: 1 / 3,
      },
    },
  };
  const domNode = useClickOutside(()=>{
    setIsTapped(false)
  })
  const language = useLanguage();
  return (
    <ChakraBox      
      position="relative"
      ref={domNode}
      initial="rest"
      whileHover="hover"
      onTouchStart={() =>setIsTapped(prev=>!prev)}
      animate={isTapped ? "hover" : "rest"}
      w={[320,360,360,400]}
      h={[200,225,225,250]}
    >
      <ChakraBox pos="absolute" variants={imageMotion}>
        <Image alt={alt} src={src} />
      </ChakraBox>
      <UnorderedList style={{ listStyleType: "none" }} h="100%">
        {tecs.map((tec, index) => {
          return (
            <ChakraBox key={tec} custom={index} variants={listMotion}>
              <ListItem fontSize={17}>{tec}</ListItem>
            </ChakraBox>
          );
        })}
      </UnorderedList>
      <ChakraBox variants={innerMotion} w="100%" position="absolute">
        <Center w="100%">
          <Button
            size={["xs", "xs", "sm", "sm"]}
            as={Link}
            target="blank"
            rel="noreferred noopener"
            href={sourceHref}
          >
            {language === "English" ? "Learn more" : "Ver mas"}
          </Button>
        </Center>
      </ChakraBox>
    </ChakraBox>
  );
};
