import { Flex, Heading, chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useLanguage } from "../context/languageContext";

const DisplayLogos = ({
  logos,
  englishTitle,
  spanishTitle,
  startingTime = 0,
}) => {
  const ChakraImg = chakra(motion.img, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const language = useLanguage();
  return (
    <Flex p={3} mt={10} gap={5} flexDir="column">
      <ChakraBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: startingTime * 0.2 }}
      >
        <Heading fontFamily="mono">
          {language === "English" ? englishTitle : spanishTitle}
        </Heading>
      </ChakraBox>
      <Flex gap={5} wrap="wrap">
        {logos.map((logo, i) => {
          return (
            <ChakraImg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (i + startingTime + 1) * 0.2 }}
              h={50}
              alt={logo.alt}
              src={logo.src}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default DisplayLogos;
