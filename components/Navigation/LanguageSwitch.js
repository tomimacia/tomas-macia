import { FormControl, FormLabel, Switch, Text } from "@chakra-ui/react";
import { useLanguage, useSetlanguage } from "../../context/languageContext";
import { useCallback } from "react";
export const LanguageSwitch = () => {
  const language = useLanguage();
  const setLanguage = useSetlanguage();
  const handleSwitch = useCallback(() => {
    setLanguage(language === "English" ? "Español" : "English");
  },[]);
  return (
    <FormControl alignItems="center" display="flex" gap={1}>
      <Text fontSize="lg" mr={3}>
        Lan
      </Text>
      <FormLabel fontSize="18px" m={0}>
        En
      </FormLabel>
      <Switch
        onChange={handleSwitch}
        colorScheme="blue"
        isChecked={language === "Español"}
      />
      <FormLabel fontSize="18px" m={0}>
        Es
      </FormLabel>
    </FormControl>
  );
};
