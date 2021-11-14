import React from "react";
import { Text, List, Stack, Image, Box, Flex } from "@chakra-ui/react";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

import { useAppState } from "../../stores/AppStore";

function RobotsList() {
  // App state
  const { AppState, AppStateDispatch } = useAppState();
  const { robots, selectedRobots } = AppState;

  const toggleRobot = React.useCallback(
    (robot) => {
      const wasSelected = selectedRobots.includes(robot);
      AppStateDispatch({
        type: "setSelectedRobots",
        payload: wasSelected
          ? selectedRobots.filter((r) => r !== robot)
          : [...selectedRobots, robot],
      });
    },
    [AppStateDispatch, selectedRobots]
  );

  return (
    <Stack spacing={4}>
      <Stack>
        <Text fontSize="3xl" fontWeight="700" textAlign="center">
          Список доступных роботов
        </Text>
        <Text fontSize="md" fontWeight="400" textAlign="center">
          (подробное описание ниже):
        </Text>
      </Stack>
      <List textAlign="center" fontFamily="FuturaLight" fontSize="xl">
        {robots.map((robot, idx) => (
          <Flex
            key={idx}
            border="1px solid rgba(0,0,0,0.1)"
            borderRadius={2}
            marginBottom="5px"
            width="100%"
            transition="backgroundColor 180ms ease"
            alignItems="center"
            _hover={{
              borderColor: "rgba(0,0,0,0)",
              backgroundColor: "rgba(255,255,255,0.2)",
              fontWeight: 600,
            }}
          >
            <Image
              src={
                robot.image
                  ? `/images/robots/${robot.image}`
                  : "/images/scalper.png"
              }
              fallbackSrc="/images/fallback.png"
              alt={robot.title}
              w="60px"
              flexShrink="0"
              height="auto"
            />
            <span>{robot.title}</span>
            <Box
              marginLeft="auto"
              marginRight="10px"
              onClick={() => toggleRobot(robot.title)}
              color="green.500"
              cursor="pointer"
            >
              {selectedRobots.includes(robot.title) ? (
                <MdBookmark />
              ) : (
                <MdBookmarkBorder />
              )}
            </Box>
          </Flex>
        ))}
      </List>
      <Text fontSize="xl" fontWeight="400" textAlign="center">
        +3 секретных робота, которые Вы можете получить при открытии счета от
        16.000$
      </Text>
    </Stack>
  );
}

export default RobotsList;
