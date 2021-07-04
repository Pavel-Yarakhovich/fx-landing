import { Container, Flex, Box } from '@chakra-ui/react';
import Steps from './steps';
import ContactForm from './form';

function FourthScreen({ addUserHandler }) {
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
          <ContactForm addUser={addUserHandler} />
        </Box>
      </Flex>
    </Container>
  );
}

export default FourthScreen;
