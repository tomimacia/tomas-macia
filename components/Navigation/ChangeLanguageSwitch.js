import { FormControl, FormLabel, Switch, Text } from "@chakra-ui/react";

export const ChangeLanguageSwitch = () => {
  return (
    <FormControl alignItems="center" display="flex" gap={1}>
      <Text fontSize="lg" mr={3}>Lan</Text>
      <FormLabel m={0}>En</FormLabel>
      <Switch colorScheme='red'/>
      <FormLabel m={0}>Es</FormLabel>
    </FormControl>
  );
};
