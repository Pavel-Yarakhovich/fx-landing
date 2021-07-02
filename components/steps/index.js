import { Stack, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

function Steps() {
  return (
    <Stack mb={[5, null]} >
      <Text fontSize="3xl" fontWeight="700">
        З простых шага:
      </Text>
      <List>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Перейти по ссылке и зарегистрировать кабинет у брокера NPBFX
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Открыть счет и пополнить счет на сумму от 500$ (при открытии
          убедиться, что введен партнерский код X)
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Напиши номер счета и список желаемых роботов нашему боту в Telegram
          или на email
        </ListItem>
      </List>
    </Stack>
  );
}

export default Steps;
