import {
  ChakraProvider,
  ColorModeProvider,  
} from "@chakra-ui/react";
import {customTheme} from "../../styles/theme";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeProvider
        options={{
          intialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}
