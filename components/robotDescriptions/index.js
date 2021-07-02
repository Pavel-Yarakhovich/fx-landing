import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import Robot from "./robot";
import ActiveRobot from "./activeRobot";

const robots = [
  {
    image: "/images/scalper.png",
    title: "Test Robot 1",
    terminal: "МТ4",
    timeframe: "M5",
    pair: "USDJPY, NZDCHF, EURNZD, EURUSD",
    description: "Some text as a robot description",
    equity: 3,
    shoulder: 120,
  },
  {
    image: "/images/scalper.png",
    title: "Test Robbbo",
    terminal: "МТ4",
    timeframe: "M5",
    pair: "USDJPY, NZDCHF, EURNZD, EURUSD",
    description: "Some text as a robot description",
    equity: 3,
    shoulder: 120,
  },
  {
    image: "/images/scalper.png",
    title: "Test Robot 3",
    terminal: "МТ4",
    timeframe: "M5",
    pair: "USDJPY, NZDCHF, EURNZD, EURUSD",
    description: "Some text as a robot description",
    equity: 3,
    shoulder: 120,
  },
  {
    image: "/images/scalper.png",
    title: "Test Robot 4",
    terminal: "МТ4",
    timeframe: "M5",
    pair: "USDJPY, NZDCHF, EURNZD, EURUSD",
    description: "Some text as a robot description",
    equity: 3,
    shoulder: 120,
  },
  {
    image: "/images/scalper.png",
    title: "Test Robot 5",
    terminal: "МТ4",
    timeframe: "M5",
    pair: "USDJPY, NZDCHF, EURNZD, EURUSD",
    description: "Some text as a robot description",
    equity: 3,
    shoulder: 120,
  },
  {
    image: "/images/scalper.png",
    title: "Test Robot",
    terminal: "МТ4",
    timeframe: "M5",
    pair: "USDJPY, NZDCHF, EURNZD, EURUSD",
    description: "Some text as a robot description",
    equity: 3,
    shoulder: 120,
  },
  {
    image: "/images/scalper.png",
    title: "Test Robot",
    terminal: "МТ4",
    timeframe: "M5",
    pair: "USDJPY, NZDCHF, EURNZD, EURUSD",
    description: "Some text as a robot description",
    equity: 3,
    shoulder: 120,
  },
  {
    image: "/images/scalper.png",
    title: "Test Robot",
    terminal: "МТ4",
    timeframe: "M5",
    pair: "USDJPY, NZDCHF, EURNZD, EURUSD",
    description: "Some text as a robot description",
    equity: 3,
    shoulder: 120,
  },
  {
    image: "/images/scalper.png",
    title: "Test Robot",
    terminal: "МТ4",
    timeframe: "M5",
    pair: "USDJPY, NZDCHF, EURNZD, EURUSD",
    description: "Some text as a robot description",
    equity: 3,
    shoulder: 120,
  },
  {
    image: "/images/scalper.png",
    title: "Test Robot",
    terminal: "МТ4",
    timeframe: "M5",
    pair: "USDJPY, NZDCHF, EURNZD, EURUSD",
    description: "Some text as a robot description",
    equity: 3,
    shoulder: 120,
  },
];

function RobotDesc() {
  const [activeRobot, setActiveRobot] = React.useState(robots[0]);
  const activeRobotRef = React.useRef(null);

  const handleClickRobot = React.useCallback((robot) => {
    setActiveRobot(robot);
    if (activeRobotRef !== null) {
      activeRobotRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <Text
        fontSize={["4xl", null, "5xl"]}
        textAlign="center"
        bgGradient="linear(to-l, #ff8903, #1f0054)"
        bgClip="text"
        fontWeight="extrabold"
      >
        Описание роботов
      </Text>
      <ActiveRobot robot={activeRobot} ref={activeRobotRef} />
      <Flex flexDirection="row" flexWrap="wrap">
        {robots.map((r, idx) => (
          <Robot key={idx} robot={r} handleClick={handleClickRobot} />
        ))}
      </Flex>
    </>
  );
}

export default RobotDesc;