import React from "react";
import { Container, Flex, Box } from "@chakra-ui/react";

import Offer from "./list";
import RobotsList from "./robots";

const SecondScreen = React.forwardRef(({ handleNextScreen, robots }, ref) => {
  return (
    <Container
      maxW="container.xl"
      p={4}
      ref={ref}
      minHeight="70vh"
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
        <Box w={["100%", null, null, "45%"]}>
          <RobotsList robots={robots} />
        </Box>
        <Box w={["100%", null, null, "55%"]}>
          <Offer handleNextScreen={handleNextScreen} />
        </Box>
      </Flex>
    </Container>
  );
});

SecondScreen.displayName = "Second Screen";

export default SecondScreen;
