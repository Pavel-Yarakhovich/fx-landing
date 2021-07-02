import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";

const DUE_DATE = "Sep 30, 2021 00:00:00";
const SEC = 1000,
  MIN = SEC * 60,
  HOUR = MIN * 60,
  DAY = HOUR * 24;

function Timer() {
  const [distance, setDistance] = React.useState(0);

  React.useEffect(() => {
    const x = setInterval(() => {
      const countDown = new Date(DUE_DATE).getTime();
      const now = new Date().getTime();
      setDistance(countDown - now);
    }, SEC);
    return () => clearInterval(x);
  }, [distance]);

  const Unit = ({ qty, unit }) => (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="1px solid #eaeaea"
      w="50px"
      borderRadius="2px"
      bg="white"
    >
      <Text fontSize="2xl" color="pink.500" fontWeight="bold">
        {qty}
      </Text>
      <Text fontStyle="italic" fontSize="xs" color="gray.500">
        {unit}
      </Text>
    </Box>
  );

  return (
    <HStack>
      <Unit qty={Math.floor(distance / DAY)} unit="дней" />
      <Unit qty={Math.floor((distance % DAY) / HOUR)} unit="часов" />
      <Unit qty={Math.floor((distance % HOUR) / MIN)} unit="минут" />
      <Unit qty={Math.floor((distance % MIN) / SEC)} unit="секунд" />
    </HStack>
  );
}

export default Timer;
