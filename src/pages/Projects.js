import { Container, Heading, Link, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import ProjectsCard from "../../components/ProjectsCard";
import MarketplacePinar from "../../public/images/MarketplacePinar.jpg";
import QuizGames from "../../public/images/QuizGames.jpg";
const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h2" size="lg">
          Some of my projects:
        </Heading>
        <ProjectsCard
          img={QuizGames.src}
          title="Quiz Games"
          alt="quiz-website"
          description={
            <Text>
              Games website, built with next.js, Chakra UI and Framer Motion.
              Also styled with nes.css library and fetching{" "}
              {
                <Link
                  target="blank"
                  rel="noreferred noopener"
                  href="https://the-trivia-api.com/"
                >
                  the-trivia-api
                </Link>
              }
            </Text>
          }
          sourceHref="https://github.com/tomimacia/quiz-games"
          siteHref="https://quiz-games-pink.vercel.app/"
        />
        <ProjectsCard
          img={MarketplacePinar.src}
          alt="marketplace-pinar-website"
          title="Marketplace Pinar"
          description="Marketplace built with next.js, Chakra UI and Framer Motion. Using Firebase's storage, firestore and google auth."
          sourceHref="https://github.com/tomimacia/marketplace-pinar"
          siteHref="https://marketplace-pinar.vercel.app/"
        />
      </Container>
    </Layout>
  );
};

export default Projects;
