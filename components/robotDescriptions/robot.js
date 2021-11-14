import { Box, Image, Badge } from "@chakra-ui/react";
import React from "react";

function RobotItem({ robot, handleClick }) {
  return (
    <Box
      w={["100%", "50%", "33%", "25%"]}
      p={2}
      onClick={() => handleClick(robot)}
    >
      <Box
        bg="white"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        pt={2}
        background={`url(${
          robot?.image ? `/images/robots/${robot.image}` : "/images/scalper.png"
        })`}
        objectPosition="center"
        objectFit="cover"
        _hover={{
          cursor: "pointer",
          boxShadow:
            "0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 9px 12px rgba(0, 0, 0, 0.14)",
          transition: "all 250ms ease",
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
