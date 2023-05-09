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
import IndexData from "../../data/Index.json";
import useJsonData from "../../hooks/useJsonData";
import DescriptionProfile from "../../public/images/ProfileImages/DescriptionProfile.png";
export default function Home() {
  const data = useJsonData(IndexData);
  return (
    <Layout>
      <Container>
        <Heading size="lg" pb={1}>
          {data?.Heading}
        </Heading>
        <Flex
          mt={4}
          p={2}
          borderRadius="3%"
          bg={useColorModeValue("blackAlpha.100", "blackAlpha.300")}
          flexDir="column"
        >
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
            <Text p={1} borderRadius="5px" fontSize={["sm", "md", "md", "lg"]}>
              {data?.Description?.map((line, i) => {
                return (
                  <span key={"Line" + i}>
                    {line}
                    <br />
                  </span>
                );
              })}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
}
