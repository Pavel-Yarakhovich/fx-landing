import { Container, Flex, Box, Alert, AlertIcon } from "@chakra-ui/react";
import Steps from "./steps";
import ContactForm from "./form";

function FourthScreen({ addUserHandler, addUserResponse }) {
  return (
    <Container
      maxW="container.xl"
      bg="center top 100% url(/images/bg.svg) no-repeat , left 50% / 40% url(/images/bg.svg) no-repeat "
    >
      <Flex
        pb={5}
        pt={5}
        alignItems="center"
        justifyContent={["space-around", null, null, "space-between"]}
        minHeight="50vh"
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
    </Container>
  );
}

export default FourthScreen;
