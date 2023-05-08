import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import ProfileImage from "../../public/images/ProfileImage.png";
export default function Home() {
  return (
    <Layout>
      <Container>
        <Flex w="100%">
          <Box
            borderRadius="5px"
            bg={useColorModeValue("gray.300", "gray.700")}
            w="100%"
          >            
          </Box>
        </Flex>
        <Flex flexDir="column">
          <Box>
            <Image
              borderRadius="15%"
              display="block"
              float="right"
              h={["200px", "250px", "300px", "350px"]}
              maxH={["200px", "300px", "350px", "400px"]}
              src={ProfileImage.src}
            />
            <Text
              borderRadius="5px"
              bg={useColorModeValue("blackAlpha.100", "blackAlpha.300")}
              fontSize={["sm", "md", "md", "xl"]}
            >
              Hello, and welcome to my personal portfolio! <br />
              My name is Tomas Macía, and I am a full stack developer based in
              Buenos Aires, Argentina. <br />I am passionate about web
              development and enjoy working with HTML, CSS, and JavaScript to
              create dynamic and engaging web applications. <br />
              In addition to my front-end skills, I am also proficient in
              node.js, React, Next.js, Chakra UI, and Framer Motion. <br />
              I strive to stay up-to-date with the latest technologies and
              trends in web development, and I am always looking for
              opportunities to expand my skillset. <br />
              Aside from my primary stack, I also have some knowledge of Python,
              Selenium, Ubuntu, and Docker. <br />
              I am a quick learner and enjoy taking on new challenges to expand
              my knowledge and abilities. <br />
              I am excited to be a part of the web development community, and I
              look forward to using my skills to create meaningful and impactful
              projects. <br />
              Thank you for taking the time to visit my portfolio, and please
              feel free to reach out if you have any questions or opportunities
              you would like to discuss. <br />
            </Text>
          </Box>          
        </Flex>
      </Container>
    </Layout>
  );
}
