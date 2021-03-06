import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import Robot from "./robot";
import ActiveRobot from "./activeRobot";

import { robotDescription } from "../../robot-descriptions";

function RobotDesc() {
  const [activeRobot, setActiveRobot] = React.useState(robotDescription[0]);
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
        {robotDescription.map((r, idx) => (
          <Robot key={idx} robot={r} handleClick={handleClickRobot} />
        ))}
      </Flex>
    </>
  );
}

export default RobotDesc;
