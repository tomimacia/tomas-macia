import { Container, Heading } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import ProjectsCard from "../../components/ProjectsCard";
import ProjectsJson from "../../data/Projects.json";
import { ProjectImages } from "../../data/ProjectImages";
import useJsonData from "../../hooks/useJsonData";
const Projects = () => {
  const data = useJsonData(ProjectsJson)
  return (
    <Layout>
      <Container>
        <Heading as="h2" size="lg">
          {data?.Title}
        </Heading>
        {data?.ProjectCardsData.map((project, i) => {
          return (
            <ProjectsCard
              key={project.alt}
              img={ProjectImages[i]?.src}
              title={project.title}
              alt={project.alt}
              description={project.description}
              sourceHref={project.sourceHref}
              siteHref={project.siteHref}
            />
          );
        })}        
      </Container>
    </Layout>
  );
};

export default Projects;
