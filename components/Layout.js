import { Box, Container } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Footer from "./Layout/Footer";
import LayoutTitle from "./Layout/LayoutTitle";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <Box minH="100%" as="main" pb={6}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tomas Macia's homepage" />
        <meta name="author" content="Tomas Macia" />
        <meta name="twitter:title" content="Tomas Macia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tomimacia" />
        <meta name="twitter:creator" content="@tomimacia" />
        <meta property="og:site_name" content="Tomas Macia" />
        <meta name="og:title" content="Tomas Macia" />
        <meta property="og:type" content="website" />
        <title>Tomas Macia - Portfolio</title>
      </Head>
      <Navigation />
      <Container pt="35px" maxW="container.md">
        <LayoutTitle />        
        <AnimatePresence>
          <Box
            as={motion.div}
            initial={{  opacity: 0 }}
            animate={{  opacity: 1 }}                        
          >
            {children}
          </Box>
        </AnimatePresence>
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
