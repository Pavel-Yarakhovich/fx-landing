import React from "react";
import Head from "next/head";
import {
  Container,
  Text,
  Stack,
  Flex,
  Box,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FaArrowCircleDown } from "react-icons/fa";
import Steps from "../components/steps";
import ContactForm from "../components/form";
import Offer from "../components/list";
import RobotsList from "../components/robots";
import RobotDescription from "../components/robotDescriptions";
import Timer from "../components/timer";
import ToTopButton from "../components/toTopButton";
import { useInView } from "react-intersection-observer";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [addUserResponse, setAddUserResponse] = React.useState(null);

  const headerRef = React.useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "0px",
    // root: headerRef,
  });

  const setRefs = React.useCallback(
    (node) => {
      headerRef.current = node;
      ref(node);
    },
    [ref]
  );

  const secondScreenRef = React.useRef(null);
  const thirdScreen = React.useRef(null);
  const showScreen = React.useCallback((ref) => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToTop = React.useCallback(() => {
    showScreen(headerRef);
  }, [showScreen]);

  async function addUserHandler(userData) {
    setAddUserResponse(null);
    const response = await fetch("/api/add-user", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    setAddUserResponse(data);
  }

  return (
    <div>
      <Head>
        <title>Уникальная возможность!</title>
        <meta
          name="description"
          content="Получи 10 торговых роботов общей стоимостью 20000$. БЕСПЛАТНО!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header} ref={setRefs}>
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
      </header>

      <main className={styles.main}>
        <Container
          maxW="container.xl"
          p={4}
          bg="left top url(/images/bg.svg) no-repeat , right 100% / 60% url(/images/bg.svg) no-repeat "
        >
          <Box
            minHeight="calc(100vh - 70px)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Stack spacing={3}>
              <Text
                textAlign="center"
                bgGradient="linear(to-l, #ff8903, #1f0054)"
                bgClip="text"
                fontSize={["4xl", null, "6xl"]}
                fontWeight="extrabold"
              >
                Уникальная возможность!
              </Text>
              <Text fontSize={["2xl", null, "4xl"]} textAlign="center">
                Получи 10 торговых роботов общей стоимостью 20000 $
              </Text>
              <Text
                fontSize={["3xl", null, "5xl"]}
                textAlign="center"
                fontWeight="extrabold"
                color="green"
                textTransform="uppercase"
              >
                Бесплатно!
              </Text>
            </Stack>

            <Flex
              pb={5}
              pt={5}
              alignItems="center"
              justifyContent="space-between"
              flexDirection={["column", null, null, "row"]}
            >
              <Box w={["100%", null, null, "60%"]}>
                <Steps />
              </Box>
              <Box w={["100%", "50%", null, "30%"]}>
                {addUserResponse && (
                  <Alert
                    status={addUserResponse.error ? "error" : "success"}
                    borderRadius="12px"
                    mb="12px"
                  >
                    <AlertIcon />
                    {addUserResponse.message}
                  </Alert>
                )}
                <ContactForm addUser={addUserHandler} />
              </Box>
            </Flex>
            <Button
              rightIcon={<FaArrowCircleDown size="35px" />}
              colorScheme="green"
              variant="outline"
              alignSelf="center"
              size="lg"
              onClick={() => showScreen(secondScreenRef)}
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
              Что ты получишь?
            </Button>
          </Box>
        </Container>

        <Container
          maxW="container.xl"
          p={4}
          ref={secondScreenRef}
          minHeight="100vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          // bgGradient="linear(to-tr, white, #f7fff9, white)"
          bg="left top url(/images/bg.svg) no-repeat , center 50% / 60% url(/images/bg.svg) no-repeat "
        >
          <Flex
            pb={5}
            pt={5}
            alignItems="center"
            justifyContent="space-between"
            flexDirection={["column", null, null, "row"]}
          >
            <Box w={["100%", null, null, "55%"]} ml="1rem">
              <Offer />
            </Box>
            <Box w={["100%", null, null, "45%"]}>
              <RobotsList />
            </Box>
          </Flex>
          <Button
            rightIcon={<FaArrowCircleDown size="35px" />}
            colorScheme="green"
            variant="outline"
            alignSelf="center"
            size="lg"
            onClick={() => showScreen(thirdScreen)}
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

        <Container
          maxW="container.xl"
          p={4}
          ref={thirdScreen}
          minHeight="100vh"
          // bgGradient="linear(to-br, white, #f7fff9, white)"
          bg="left top url(/images/bg.svg) no-repeat , center 100% / 60% url(/images/bg.svg) no-repeat "
        >
          <RobotDescription />
        </Container>

        <Container
          maxW="container.xl"
          // bgGradient="linear(to-tr, white, #f7fff9, white)"
          bg="center top 100% url(/images/bg.svg) no-repeat , left 50% / 40% url(/images/bg.svg) no-repeat "
        >
          <Flex
            pb={5}
            pt={5}
            alignItems="center"
            justifyContent={["space-around", null, null, "space-between"]}
            minHeight="50vh"
            flexDirection={["column", null, null, "row"]}
          >
            <Box w={["100%", null, null, "60%"]}>
              <Steps />
            </Box>
            <Box w={["100%", "50%", null, "30%"]}>
              <ContactForm addUser={addUserHandler} />
            </Box>
          </Flex>
        </Container>

        <ToTopButton show={!inView} handleClick={scrollToTop} />
      </main>

      <footer className={styles.footer}>
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
      </footer>
    </div>
  );
}
