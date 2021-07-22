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
  useDisclosure,
} from "@chakra-ui/react";
import ImageViewer from "../imageViewer";
import { GiClick } from "react-icons/gi";

const Images = ({ title, imagesArr, robotTitle, imageSubfolder }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = React.useCallback(
    (image) => {
      setSelectedImage(image);
      onOpen();
    },
    [setSelectedImage, onOpen]
  );

  if (!imagesArr || imagesArr?.length === 0) return null;
  return (
    <Stack spacing={3} mb={3}>
      <HStack>
        <Text fontSize="xl" fontWeight="700">
          {title}
        </Text>
        <GiClick size="30px" color="#1a202c" />
      </HStack>

      <HStack
        p={3}
        spacing={3}
        overflow="auto"
        maxWidth="100%"
        css={{
          "&::-webkit-scrollbar": {
            width: "10px",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            width: "2px",
          },
          "&::-webkit-scrollbar-thumb": {
            width: "4px",
            background: "#c6f6d5",
            borderRadius: "12px",
            boxShadow: "0 0 1px rgba(255, 255, 255, 0.5)",
          },
        }}
      >
        {imagesArr.map((d) => (
          <Image
            key={d}
            src={`/images/${imageSubfolder ? `${imageSubfolder}/` : ''}${d}`}
            alt={robotTitle}
            w={["100%", "60%", "35%"]}
            height="200px"
            borderRadius="4px"
            boxShadow="0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 11px rgba(0, 0, 0, 0.12),
    0px 4px 8px rgba(0, 0, 0, 0.14)"
            onClick={() => handleImageClick(d)}
            _hover={{
              cursor: "pointer",
              transition: "all 200ms ease",
            }}
          />
        ))}
      </HStack>
      <ImageViewer
        isOpen={isOpen}
        onClose={onClose}
        image={selectedImage}
        urls={imagesArr}
        title={robotTitle}
        imageSubfolder={imageSubfolder}
      />
    </Stack>
  );
};

const ActiveRobot = React.forwardRef(({ robot }, ref) => {
  return (
    <>
      <Box w="100%" p={[0, 1, 2]} mb="30px" ref={ref}>
        <Flex
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDirection={["column", null, "row"]}
        >
          <Image
            src={robot.image ? `/images/robots/${robot.image}` : "/images/scalper.png"}
            fallbackSrc="/images/fallback.png"
            alt={robot.title}
            w={["100%", "60%", "35%"]}
            flexShrink="0"
            height="auto"
          />

          <Box p={[1, 2, 6]}>
            <Text fontSize="3xl" fontWeight="700" mb={3}>
              {robot.title}
            </Text>

            {robot.features.map((f) => {
              const [key, value] = f.split("|");
              return (
                <Box
                  d="flex"
                  alignItems="baseline"
                  flexDirection={["column", "row"]}
                  mb={3}
                  key={key}
                >
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
            })}

            <Text mb={4} fontFamily="FuturaLight" fontSize="xl">
              {robot.desc}
            </Text>

            <Images
              title="Результаты клиентов"
              imagesArr={robot.results}
              robotTitle={robot.title}
              imageSubfolder="results"
            />

            <Images
              title="Примеры сделок"
              imagesArr={robot.deals}
              robotTitle={robot.title}
            />

            <Images
              title="Примеры сигналов"
              imagesArr={robot.signals}
              robotTitle={robot.title}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
});

ActiveRobot.displayName = "Active Robot";

export default ActiveRobot;
