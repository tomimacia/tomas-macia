import {
  Container
} from "@chakra-ui/react";
import DisplayLogos from "../../components/DisplayLogos";
import Layout from "../../components/Layout";
import { MainStack, Strong } from "../../data/exportLogos";
const Skills = () => {
  
  return (
    <Layout>
      <Container>        
        <DisplayLogos
          englishTitle="Main stack:"
          spanishTitle="Manejo avanzado:"
          logos={MainStack}          
        />
        <DisplayLogos
          englishTitle="Solid Knowledge:"
          spanishTitle="Conocimientos sólidos:"
          logos={Strong}
          startingTime={MainStack.length + 1}
        />
      </Container>
    </Layout>
  );
};

export default Skills;
