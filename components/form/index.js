import { Stack, Input, FormControl, FormLabel, Button } from "@chakra-ui/react";

function ContactForm() {
  return (
    <Stack
      spacing={3}
      boxShadow="0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12),
    0px 9px 12px rgba(0, 0, 0, 0.14)"
      p={4}
      borderRadius="20px"
      backgroundColor="white"
    >
      <FormControl id="name" isRequired>
        <FormLabel>Имя</FormLabel>
        <Input placeholder="Имя" />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Email" type="email" />
      </FormControl>
      <FormControl id="telegram" isRequired>
        <FormLabel>Telegram</FormLabel>
        <Input placeholder="Telegram" />
      </FormControl>
      <Button
        colorScheme="green"
        alignSelf="center"
        w="100%"
      >
        Регистрация
      </Button>
      u
    </Stack>
  );
}

export default ContactForm;
