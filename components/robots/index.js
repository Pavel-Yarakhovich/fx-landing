import { Text, List, ListItem, Stack, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const ROBOTS = [
  { title: 'Robot', link: "#" },
  { title: 'Robot', link: "#" },
  { title: 'Robot', link: "#" },
  { title: 'Robot', link: "#" },
  { title: 'Robot', link: "#" },
  { title: 'Robot', link: "#" },
  { title: 'Robot', link: "#" },
  { title: 'Robot', link: "#" },
  { title: 'Robot', link: "#" },
  { title: 'Robot', link: "#" },
];

function RobotsList() {
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
      <List textAlign="center">
        {ROBOTS.map((robot, idx) => (
          <ListItem key={idx}>
            <ListIcon as={MdCheckCircle} color="green.500" />
            {robot.title} {idx + 1}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

export default RobotsList;
