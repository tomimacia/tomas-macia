import { Container, Flex, chakra, shouldForwardProp } from "@chakra-ui/react";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import Layout from "../../components/Layout";
import { Logos } from "../../public/logos/exportLogos";
const Skills = () => {
  const ChakraImg = chakra(motion.img, {    
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <Layout>
      <Container>
      <Flex gap={5} wrap="wrap">
        {Logos.map((logo, i) => {
          return (
            <AnimatePresence>
              <ChakraImg                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}   
                transition={{ delay: i*0.2 }}             
                h={50}
                key={`Logo-${i + 1}`}
                alt={logo.alt}
                src={logo.src}
              />
            </AnimatePresence>
          );
        })}
      </Flex>
      </Container>
    </Layout>
  );
};

export default Skills;
