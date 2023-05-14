import {
  Box,
  Container,
  Divider,
  Heading,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import Head from "next/head";
import Footer from "./Layout/Footer";
import LayoutTitle from "./Layout/LayoutTitle";
import Navigation from "./Navigation";
import HeaderLogo from "../public/logos/HeaderLogo.png";
const Layout = ({ pageTitle, headTitle, children }) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <Box pos="relative" minH="100vh" h="100%" as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tomas Macia's homepage" />
        <meta name="author" content="Tomas Macia" />
        <meta name="twitter:title" content="Tomas Macia" />
        <meta name="twitter:site" content="@tomimacia" />
        <meta name="twitter:creator" content="@tomimacia" />
        <meta property="og:site_name" content="Tomas Macia" />
        <meta name="og:title" content="Tomas Macia" />
        <meta property="og:type" content="website" />
        <link rel="icon" href={HeaderLogo.src} />
        <title>Tomas Macia - {headTitle}</title>
      </Head>
      <Navigation />
      <Container h="100%" pb="4rem" pt="35px" maxW="container.md">
        <LayoutTitle />
        <Divider m={6} maxW="90%" orientation="horizontal" />
        <AnimatePresence mode="wait">
          <ChakraBox
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 1 }}
          >
            <Container>
              <Heading size="lg" pb={1}>
                {pageTitle}
              </Heading>
              {children}
            </Container>
          </ChakraBox>
        </AnimatePresence>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
