import { Text, List, ListItem, Stack, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import Link from "next/link";

import { robotDescription } from "../../robot-descriptions";

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
      <List textAlign="center" fontFamily="FuturaLight" fontSize="xl">
        {robotDescription.map((robot, idx) => (
          <ListItem key={idx}>
            <Link href="#robot-description" passHref>
              <a>
                <ListIcon as={MdCheckCircle} color="green.500" />
                {robot.title}
              </a>
            </Link>
          </ListItem>
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
