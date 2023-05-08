import { Heading, VStack, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ChakraSection = ({ id, title, children }) => {
  const ChakraBox = chakra(motion.div);
  return (
    <ChakraBox
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transitionDuration="5s"
      pt="50px"      
      id={id}
      minH="400px"
      w="100%"
    >
      <VStack>
        <Heading>{title}</Heading>
      </VStack>
      {children}
    </ChakraBox>
  );
};

export default ChakraSection;
