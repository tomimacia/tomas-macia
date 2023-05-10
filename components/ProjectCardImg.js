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

export const ProjectCardImg = ({ alt, src, sourceHref }) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
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
  const listMotion = (delay) => {
    return {
      rest: {
        opacity: 0,
        x: 0,
        y:40
      },
      hover: {
        opacity: 1,
        x: 15,
        transition: {
          duration: 0.4,
          type: "tween",
          ease: "easeIn",
          delay: delay / 2,
          duration: 1 / 2,
        },
      },
    };
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
  const tecs = ["NextJS", "ChakraUI", "Firebase"];
  const language = useLanguage();
  return (
    <ChakraBox
      position="relative"
      initial="rest"
      whileHover="hover"
      animate="rest"
      w={370}
      h={230}
    >
      <ChakraBox pos="absolute" variants={imageMotion}>
        <Image alt={alt} src={src} />
      </ChakraBox>
      <UnorderedList style={{listStyleType:"none"}} h='100%'>
        {tecs.map((tec, i) => {
          return (
            <ChakraBox key={tec} variants={listMotion(i)}>
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
