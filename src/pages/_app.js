import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../../styles/theme";
import Layout from "../../components/Layouts/Main";
import { AnimatePresence } from "framer-motion";
export default function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
