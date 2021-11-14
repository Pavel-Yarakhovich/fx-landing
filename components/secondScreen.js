import React from "react";
import { Container, Flex, Box, Button } from "@chakra-ui/react";
import { FaArrowCircleDown } from "react-icons/fa";

import Offer from "./list";
import RobotsList from "./robots";

const SecondScreen = React.forwardRef(({ handleNextScreen, robots }, ref) => {
  return (
    <Container
      maxW="container.xl"
      p={4}
      ref={ref}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      bg="left top url(/images/bg.svg) no-repeat , center 50% / 60% url(/images/bg.svg) no-repeat "
    >
      <Flex
        pb={5}
        pt={5}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={["column", null, null, "row"]}
      >
        <Box w={["100%", null, null, "55%"]}>
          <Offer />
        </Box>
        <Box w={["100%", null, null, "45%"]}>
          <RobotsList robots={robots} />
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
        Перейти к описанию роботов
      </Button>
    </Container>
  );
});

SecondScreen.displayName = "Second Screen";

export default SecondScreen;
