import React from "react";
import {
  Text,
  List,
  ListItem,
  Stack,
  ListIcon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Box,
  SliderThumb,
  Flex,
  Button,
} from "@chakra-ui/react";
import { SiAbbrobotstudio } from "react-icons/si";
import { FaArrowCircleDown } from "react-icons/fa";

const OFFER = [
  { sum: 20000, qty: "10 роботов" },
  { sum: 18000, qty: "9 роботов" },
  { sum: 16000, qty: "8 роботов" },
  { sum: 14000, qty: "7 роботов" },
  { sum: 11000, qty: "6 роботов" },
  { sum: 8000, qty: "5 роботов" },
  { sum: 5000, qty: "4 робота" },
  { sum: 3000, qty: "3 робота" },
  { sum: 2000, qty: "2 робота" },
  { sum: 500, qty: "1 робот" },
];

function Offer({ handleNextScreen }) {
  const [deposit, setDeposit] = React.useState(10000);
  const [currentOption, setCurrentOption] = React.useState("");

  const minDeposit = Math.min(...OFFER.map((x) => x.sum));
  const maxDeposit = Math.max(...OFFER.map((x) => x.sum));

  React.useEffect(() => {
    const option = OFFER.filter((x) => x.sum <= deposit);
    setCurrentOption(option.slice(0, 1)[0].qty);
  }, [deposit]);

  return (
    <Stack
      spacing={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginBottom={["15px", "0px"]}
      marginTop={["40px", "0px"]}
    >
      <Text fontSize="3xl" fontWeight="700" textAlign="center">
        Количество предоставляемых роботов:
      </Text>
      <Stack
        border="1px solid rgba(255,255,255,0.4)"
        borderRadius="4px"
        padding={3}
        width={["100%", "70%"]}
      >
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          <Box
            borderRadius="4"
            padding={4}
            backgroundColor="white"
            flexBasis="45%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              fontSize="lg"
              fontWeight="500"
              textAlign="center"
              flexBasis="30%"
            >
              Размер депозита
            </Text>
            <Text fontSize="2xl" fontWeight="700" textAlign="center">
              от ${deposit}
            </Text>
          </Box>
          <Box
            borderRadius="4"
            padding={4}
            backgroundColor="white"
            flexBasis="45%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text fontSize="lg" fontWeight="500" textAlign="center">
              Количество роботов
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="700"
              textAlign="center"
              bgGradient="linear(to-l, #ff8903, #1f0054)"
              bgClip="text"
            >
              {currentOption}
            </Text>
          </Box>
        </Flex>
        <Slider
          width="100%"
          defaultValue={deposit}
          min={500}
          max={20000}
          step={500}
          onChange={(value) => setDeposit(value)}
        >
          <SliderTrack bg="white" height="6px">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="green.500" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
        <Flex justifyContent="space-between" width="100%">
          <Box>от ${minDeposit}</Box>
          <Box>от ${maxDeposit}</Box>
        </Flex>
      </Stack>
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
    </Stack>
  );
}

export default Offer;
