import { FormControl, FormLabel, Switch, Text } from "@chakra-ui/react";

export const LanguageSwitch = () => {
  return (
    <FormControl alignItems="center" display="flex" gap={1}>
      <Text fontSize="lg" mr={3}>
        Lan
      </Text>
      <FormLabel fontSize="18px" m={0}>
        En
      </FormLabel>
      <Switch colorScheme="blue" />
      <FormLabel fontSize="18px" m={0}>
        Es
      </FormLabel>
    </FormControl>
  );
};
