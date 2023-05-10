import { Container, Heading } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import ProjectsCard from "../../components/Projects/ProjectsCard";
import ProjectsJson from "../../data/Projects.json";
import { MainImages } from "../../data/ProjectImages";
import { ModalImages } from "../../data/ProjectImages";
import useJsonData from "../../hooks/useJsonData";
const Projects = () => {
  const data = useJsonData(ProjectsJson)
  return (
    <Layout>
      <Container>
        <Heading as="h2" size="lg">
          {data?.Title}
        </Heading>
        {data.ProjectCardsData.map((project, i) => {
          return (
            <ProjectsCard
              key={project.alt}
              img={MainImages[i].src}
              modalImages={ModalImages[i]}
              project={project}
            />
          );
        })}        
      </Container>
    </Layout>
  );
};

export default Projects;
