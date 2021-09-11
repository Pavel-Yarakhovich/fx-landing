import {
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  Link,
  Image,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const BROKER_LINK = "https://nmaffru.com/z1iuz5b2wg80";

function Steps() {
  return (
    <Stack mb={[5, null]}>
      <Text fontSize="3xl" fontWeight="700">
        З простых шага:
      </Text>
      <List fontFamily="FuturaLight" fontSize="xl">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Перейти по{" "}
          <Link href={BROKER_LINK} isExternal color="#008000" fontWeight="700">
            ссылке
          </Link>{" "}
          и зарегистрировать кабинет у{" "}
          <Link href={BROKER_LINK} isExternal color="#008000" fontWeight="700">
            брокера NPBFX
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Открыть счет и пополнить счет на сумму от 500$ (при открытии
          убедиться, что введен партнерский код{" "}
          <Text fontWeight={700} display="inline-block">
            a6d12b12
          </Text>
          )
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Напиши своё имя, е-мейл, номер счета и список желаемых роботов в форму
          обратной связи
        </ListItem>
      </List>
      <Link
        href="https://www.npbfx.ru/"
        target="_blank"
        rel="noopener noreferrer"
        alignSelf="center"
      >
        <Image src="/images/npbfx_logo.png" alt="NPBFX logo" height="80px" />
      </Link>
    </Stack>
  );
}

export default Steps;
