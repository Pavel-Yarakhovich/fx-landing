import { Box, Text } from '@chakra-ui/react';
import Timer from './timer';

function Expiration() {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      m="auto"
    >
      <Text
        fontSize="medium"
        mr={3}
        color="white"
        letterSpacing="wide"
        fontWeight="bold"
        display={["none", "block"]}
      >
        Не упусти свой шанс! Предложение действует{" "}
      </Text>
      <Timer />
    </Box>
  );
}

export default Expiration;
