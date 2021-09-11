import {
  Container,
  Box,
  Stack,
  Text,
  Flex,
  Alert,
  AlertIcon,
  Button,
} from "@chakra-ui/react";
import { FaArrowCircleDown } from "react-icons/fa";
import Steps from "./steps";
import ContactForm from "./form";

function FirstScreen({ addUserHandler, handleNextScreen, addUserResponse }) {
  return (
    <Container
      maxW="container.xl"
      p={4}
      // bg="left top url(/images/bg.svg) no-repeat , right 100% / 60% url(/images/bg.svg) no-repeat "
    >
      <Box
        minHeight="calc(100vh - 70px)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Stack spacing={3}>
          <Text
            textAlign="center"
            bgGradient="linear(to-l, #ff8903, #1f0054)"
            bgClip="text"
            fontSize={["4xl", null, "6xl"]}
            fontWeight="extrabold"
          >
            Уникальная возможность!
          </Text>
          <Text fontSize={["2xl", null, "4xl"]} textAlign="center">
            Получи 10 торговых роботов общей стоимостью 20000 $
          </Text>
          <Text
            fontSize={["3xl", null, "5xl"]}
            textAlign="center"
            fontWeight="extrabold"
            color="green"
            textTransform="uppercase"
            letterSpacing="0.3rem"
          >
            Бесплатно!
          </Text>
          <Text fontSize={["2xl", null, "4xl"]} textAlign="center">
            Заработай от 100$ уже сегодня, просто установив один из роботов.
          </Text>
        </Stack>

        <Flex
          pb={5}
          pt={5}
          alignItems="center"
          justifyContent="space-between"
          flexDirection={["column", null, null, "row"]}
        >
          <Box w={["100%", null, null, "60%"]}>
            <Steps />
          </Box>
          <Box w={["100%", "50%", null, "30%"]}>
            {addUserResponse && (
              <Alert
                status={addUserResponse.error ? "error" : "success"}
                borderRadius="12px"
                mb="12px"
              >
                <AlertIcon />
                {addUserResponse.message}
              </Alert>
            )}
            <ContactForm addUser={addUserHandler} />
          </Box>
        </Flex>
        <Button
          rightIcon={<FaArrowCircleDown size="35px" />}
          colorScheme="green"
          variant="outline"
          alignSelf="center"
          size="lg"
          onClick={handleNextScreen}
          boxShadow="0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12),
    0px 9px 12px rgba(0, 0, 0, 0.14)"
          bg="white"
          border="none"
          fontSize="1.5rem"
          p={["0.5rem", "2rem"]}
          maxWidth="100vw"
          h="auto"
          whiteSpace="wrap"
        >
          Что ты получишь?
        </Button>
      </Box>
    </Container>
  );
}

export default FirstScreen;
