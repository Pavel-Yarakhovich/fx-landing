import { Text, List, ListItem, Stack, ListIcon } from "@chakra-ui/react";
import { SiAbbrobotstudio } from "react-icons/si";

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

function Offer() {
  return (
    <Stack spacing={4}>
      <Text fontSize="3xl" fontWeight="700" textAlign="center">
        Количество предоставляемых роботов:
      </Text>
      <List
        textAlign="center"
        fontFamily="FuturaLight"
        fontSize="xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="0px"
      >
        {OFFER.map((of, idx) => (
          <ListItem
            key={idx}
            border="1px solid gray"
            borderRadius="4px"
            margin="2px 0"
            padding="4px"
            width={["100%", "70%"]}
          >
            <ListIcon as={SiAbbrobotstudio} color="green.500" />
            При депозите от ${of.sum} - {of.qty}
          </ListItem>
        )).reverse()}
      </List>
    </Stack>
  );
}

export default Offer;
