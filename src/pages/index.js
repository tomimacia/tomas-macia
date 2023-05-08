import {
  Box,
  Container,
  Divider,
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
          About
        </Heading>
        <Divider orientation="horizontal" m={2} />
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
              fontSize={["sm", "md", "md", "lg"]}
            >
              His name is Tomas Macía, and he is a full-stack React developer
              based in Buenos Aires, Argentina. <br />
              He is passionate about web development and enjoys working with
              HTML, CSS, and JavaScript to create dynamic and engaging web
              applications. <br />
              In addition, he is also proficient in node.js, React, Next.js,
              Chakra UI, and Framer Motion. <br />
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
              {/* Spanish: Su nombre es Tomas Macía, y es un desarrollador
              full-stack de React con sede en Buenos Aires, Argentina. <br />
              Es apasionado por el desarrollo web y disfruta trabajando con
              HTML, CSS y JavaScript para crear aplicaciones web dinámicas e
              interesantes. <br />
              Además, también es experto en
              node.js, React, Next.js, Chakra UI y Framer Motion. <br />
              Se esfuerza por mantenerse actualizado con las últimas tecnologías
              y tendencias en el desarrollo web, y siempre está buscando
              oportunidades para expandir su conjunto de habilidades. <br />
              Además de su conjunto de herramientas principal, también tiene
              algún conocimiento de Python, Selenium, Ubuntu y Docker. <br />
              Es un aprendiz rápido y disfruta asumir nuevos desafíos para
              expandir su conocimiento y habilidades. <br />
              Está emocionado de ser parte de la comunidad de desarrollo web, y
              espera utilizar sus habilidades para crear proyectos
              significativos e impactantes. <br />
              Gracias por tomarse el tiempo de visitar su portafolio, y no dude
              en contactarlo si tiene alguna pregunta u oportunidad que le
              gustaría discutir. <br /> */}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}
