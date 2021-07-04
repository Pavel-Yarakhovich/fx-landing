import React from "react";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import loadable from "@loadable/component";

const FirstScreen = loadable(() => import("../components/firstScreen"));
const SecondScreen = loadable(() => import("../components/secondScreen"));
const ThirdScreen = loadable(() => import("../components/thirdScreen"));
const FourthScreen = loadable(() => import("../components/fourthScreen"));
const Expiration = loadable(() => import("../components/expiration"));
const ToTopButton = loadable(() => import("../components/toTopButton"));

import styles from "../styles/Home.module.css";

export default function Home() {
  const [addUserResponse, setAddUserResponse] = React.useState(null);

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

  const secondScreenRef = React.useRef(null);
  const thirdScreenRef = React.useRef(null);
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
        <Expiration />
      </header>
      <div className={styles.underlay}/>
      <main className={styles.main}>
        <FirstScreen
          addUserHandler={addUserHandler}
          handleNextScreen={() => showScreen(secondScreenRef)}
          addUserResponse={addUserResponse}
        />

        <SecondScreen
          handleNextScreen={() => showScreen(thirdScreenRef)}
          ref={secondScreenRef}
        />
        <ThirdScreen ref={thirdScreenRef} />
        <FourthScreen addUserHandler={addUserHandler} />

        <ToTopButton show={!inView} handleClick={scrollToTop} />
      </main>

      <footer className={styles.footer}>
        <Expiration />
      </footer>
    </div>
  );
}
