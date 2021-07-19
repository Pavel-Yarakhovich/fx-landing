import React from "react";
import { Container } from '@chakra-ui/react';
import RobotDescription from './robotDescriptions';

const ThirdScreen = React.forwardRef((_, ref) => {
  return (
    <Container
      id="robot-description"
      maxW="container.xl"
      p={4}
      ref={ref}
      minHeight="100vh"
      bg="left top url(/images/bg.svg) no-repeat , center 100% / 60% url(/images/bg.svg) no-repeat "
    >
      <RobotDescription />
    </Container>
  );
});

ThirdScreen.displayName = 'Third Screen';

export default ThirdScreen;

