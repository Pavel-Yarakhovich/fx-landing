import { Box, Image, Badge } from "@chakra-ui/react";
import React from "react";

import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

import { useAppState } from "../../stores/AppStore";

function RobotItem({ robot, handleClick }) {
  // App state
  const { AppState, AppStateDispatch } = useAppState();
  const { selectedRobots } = AppState;

  const toggleRobot = React.useCallback(
    (e, robot) => {
      e.stopPropagation();
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
    <Box
      w={["100%", "50%", "33%", "25%"]}
      p={2}
      onClick={() => handleClick(robot)}
    >
      <Box
        position="relative"
        bg="white"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        pt={2}
        objectPosition="center"
        objectFit="cover"
        _hover={{
          cursor: "pointer",
          boxShadow:
            "0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 9px 12px rgba(0, 0, 0, 0.14)",
          transition: "all 250ms ease",
        }}
      >
        <Box
          position="absolute"
          top={1}
          right={1}
          onClick={(e) => toggleRobot(e, robot.title)}
          color="green.500"
          cursor="pointer"
        >
          {selectedRobots.includes(robot.title) ? (
            <MdBookmark fontSize="26px" />
          ) : (
            <MdBookmarkBorder fontSize="26px" />
          )}
        </Box>
        <Image
          src={
            robot.image
              ? `/images/robots/${robot.image}`
              : "/images/scalper.png"
          }
          fallbackSrc="/images/fallback.png"
          alt={robot.title}
          maxHeight="210px"
          margin="auto"
        />

        <Box p="3">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {robot.title}
          </Box>

          <Box d="flex" alignItems="baseline">
            {robot.features.map((f) => {
              const [key, value] = f.split("|");
              if (key === "Терминал" || key === "ТаймФрейм") {
                return (
                  <Box mr={2} key={key}>
                    <Badge borderRadius="full" px="2" colorScheme="green">
                      {key}
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {value}
                    </Box>
                  </Box>
                );
              }
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RobotItem;
