import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import DescriptionProfile from "../../public/images/DescriptionProfile.png";
export default function Home() {
  return (
    <Layout>
      <Container>
        <Heading size="lg" pb={1}>
          About me
        </Heading>

        <Flex flexDir="column">
          <Box>
            <Image
              p={1}
              borderRadius="15%"
              display="block"
              float="right"
              alt="profile-img"
              h={["200px", "250px", "300px", "350px"]}
              maxH={["200px", "300px", "350px", "400px"]}
              src={DescriptionProfile.src}
            />
            <Text
              p={1}
              borderRadius="5px"
              bg={useColorModeValue("blackAlpha.100", "blackAlpha.300")}
              fontSize={["sm", "md", "md", "xl"]}
            >
              Welcome to Tomas&apos;s portfolio! <br />
              His name is Tomas Macía, and he is a full-stack React developer
              based in Buenos Aires, Argentina. <br />
              He is passionate about web development and enjoys working with
              HTML, CSS, and JavaScript to create dynamic and engaging web
              applications. <br />
              In addition to his front-end skills, he is also proficient in
              node.js, React, Next.js, Chakra UI, and Framer Motion. <br />
              He strives to stay up-to-date with the latest technologies and
              trends in web development, and he is always looking for
              opportunities to expand his skillset. <br />
              Aside from his primary stack, he also has some knowledge of
              Python, Selenium, Ubuntu, and Docker. <br />
              He is a quick learner and enjoys taking on new challenges to
              expand his knowledge and abilities. <br />
              He is excited to be a part of the web development community, and
              he looks forward to use his skills to create meaningful and
              impactful projects. <br />
              Thank you for taking the time visiting his portfolio, and please
              feel free to reach him out if you have any questions or
              opportunities you would like to discuss. <br />
            </Text>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}
