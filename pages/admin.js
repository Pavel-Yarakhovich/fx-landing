import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Stack,
  Flex,
  Text,
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import ToTopButton from "../components/toTopButton";
import { useInView } from "react-intersection-observer";

import { MongoClient } from "mongodb";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  const headerRef = React.useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "0px",
  });

  const setRefs = React.useCallback(
    (node) => {
      headerRef.current = node;
      ref(node);
    },
    [ref]
  );

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

  return (
    <div>
      <Head>
        <title>Admin</title>
        <meta
          name="description"
          content="Список зарегистрированных пользователей"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header} ref={setRefs}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" w="100%">
            <Button colorScheme="teal" alignSelf="center">
              <Link href="/">На главную</Link>
            </Button>
            <Text
              textAlign="center"
              fontSize={["4xl", null, "5xl"]}
              fontWeight="extrabold"
              color="white"
            >
              ADMIN
            </Text>
          </Flex>
        </Container>
      </header>

      <main className={styles.main}>
        <Container
          maxW="container.xl"
          p={4}
          bg="left top url(/images/bg.svg) no-repeat , right 100% / 60% url(/images/bg.svg) no-repeat"
          overflow="auto"
        >
          <Box
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Stack spacing={3}>
              <Text
                fontSize={["1xl", null, "3xl"]}
                fontWeight="extrabold"
                color="black"
              >
                Список зарегистрированных пользователей
              </Text>

              <Table variant="striped" colorScheme="teal" w="100%">
                <TableCaption>
                  Список актуален на { new Date().toDateString() }
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>ИМЯ</Th>
                    <Th>EMAIL</Th>
                    <Th>TELEGRAM</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {props.users.map((user) => (
                    <Tr key={user.id}>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.telegram}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th colSpan={2}>Всего пользователей</Th>
                    <Th>{props.users.length}</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </Stack>
          </Box>
        </Container>

        <ToTopButton show={!inView} handleClick={scrollToTop} />
      </main>

      <footer className={styles.footer} />
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://AvtomatFxAdmin:KqOjH1icXcg8Nfjd@cluster0.cnk7p.mongodb.net/landing?retryWrites=true&w=majority" // TODO: move password to .env
  );
  const db = client.db();

  const usersCollection = db.collection("users");
  const users = await usersCollection.find().toArray();

  const usersPrepared = users.map((user) => ({
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    telegram: user.telegram,
  }));

  client.close();

  return {
    props: {
      users: usersPrepared,
    },
    revalidate: 10, // in seconds
  };
}
