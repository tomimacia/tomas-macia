import { Container, Heading } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import ProjectsCard from "../../components/ProjectsCard";
import QuizGames from "../../public/images/QuizGames.jpg";
import MarketplacePinar from "../../public/images/MarketplacePinar.jpg";
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
          description="Una descripcion"
          sourceHref="https://github.com/tomimacia/quiz-games"
          siteHref="https://quiz-games-pink.vercel.app/"
        />
        <ProjectsCard
          img={MarketplacePinar.src}
          title="Marketplace Pinar"
          description="Una descripcion"
          sourceHref="https://github.com/tomimacia/marketplace-pinar"
          siteHref="https://marketplace-pinar.vercel.app/"
        />
      </Container>
    </Layout>
  );
};

export default Projects;
