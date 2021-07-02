import React from "react";
import {
  Box,
  Image,
  Badge,
  Flex,
  Text,
  Stack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

const ActiveRobot = React.forwardRef(({ robot }, ref) => {
  return (
    <Box w="100%" p={2} mb="30px" ref={ref}>
      <Flex
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection={["column", null, "row"]}
      >
        <Image
          src={robot.image}
          alt={robot.title}
          w={["100%", "60%", "35%"]}
          flexShrink="0"
          height="auto"
        />

        <Box p="6">
          <Text fontSize="3xl" fontWeight="700" mb={3}>
            {robot.title}
          </Text>

          <Box d="flex" alignItems="baseline" mb={3}>
            <Badge borderRadius="full" px="2" colorScheme="green">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {robot.equity} equity &bull; shoulder - {robot.shoulder}
            </Box>
          </Box>

          <Box d="flex" alignItems="baseline" mb={3}>
            <Badge borderRadius="full" px="2" colorScheme="green">
              Пара
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {robot.pair}
            </Box>
          </Box>

          <Box d="flex" alignItems="baseline" mb={3}>
            <Badge borderRadius="full" px="2" colorScheme="green">
              Терминал
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {robot.terminal}
            </Box>
          </Box>

          <Box d="flex" alignItems="baseline" mb={3}>
            <Badge borderRadius="full" px="2" colorScheme="green">
              Таймфрейм
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {robot.timeframe}
            </Box>
          </Box>

          <Text mb={4}>
            После оплаты Вам на почту будет выслан робот, set-файлы и подробная
            инструкция. Советник можно привязать к 3-м счетам. После оплаты мы
            привяжем робот к Вашему счету (в последующем, когда вам понадобится
            привязать еще к одному счету, то вы вышлите его номер, и новая
            версия будет привязана уже к этим двум счетам. И так до трех
            счетов). Также по мере выхода обновлений советника, мы будем
            высылать вам обновленную версию. Мы предоставляем настройки (в
            советнике есть агрессивные и консервативные настройки.) и
            консультируем по работе советника. Настройки в советнике стоят по
            умолчанию, необходимо только отрегулировать лотность (мы поможем
            подобрать лотность). Мы всегда на связи. Даже те трейдеры, которые
            не имеют опыта торговли, с нашей помощью устанавливают советник и
            начинают торговать.
          </Text>

          <Stack spacing={3}>
            <Text fontSize="xl" fontWeight="700">
              Результаты торговли
            </Text>
            <HStack>
              <Link
                href="https://chakra-ui.com"
                isExternal
                mx="2px"
                color="teal"
                border="1px solid #ddd"
                borderRadius="4px"
                p={2}
                position="relative"
              >
                Chakra Design system{" "}
                <FiExternalLink
                  ml="5px"
                  position="absolute"
                  top="0"
                  right="0"
                />
              </Link>
              <Link
                href="https://chakra-ui.com"
                isExternal
                mx="2px"
                color="teal"
                border="1px solid #ddd"
                borderRadius="4px"
                p={2}
                position="relative"
              >
                Chakra Design system <FiExternalLink ml="5px" />
              </Link>
              <Link
                href="https://chakra-ui.com"
                isExternal
                mx="2px"
                color="teal"
                border="1px solid #ddd"
                borderRadius="4px"
                p={2}
                position="relative"
              >
                Chakra Design system <FiExternalLink ml="5px" />
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
});

ActiveRobot.displayName = 'Active Robot';

export default ActiveRobot;
