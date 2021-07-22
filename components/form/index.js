import React from "react";
import {
  Stack,
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import Link from "next/link";

import { robotDescription } from '../../robot-descriptions';

const initUser = { name: "", email: "", count: "", selectedRobots: [] };
const EMAIL_VALIDATOR = /\S+@\S+\.\S+/;
const ADMIN = process.env.NEXT_PUBLIC_ADMIN;

function ContactForm({ addUser }) {
  const [isRegistering, setRegistering] = React.useState(false);
  const [newUser, setNewUser] = React.useState(initUser);
  const [errors, setErrors] = React.useState(initUser);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [adminPswd, setAdminPswd] = React.useState("");

  const changeUserData = React.useCallback(({ target: { name, value } }) => {
    setIsAdmin(name === "email" && value === ADMIN);
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleCheckbox = React.useCallback((robot) => {
    const wasSelected = newUser.selectedRobots.includes(robot);
    setNewUser((prev) => ({
      ...prev,
      selectedRobots: wasSelected ? prev.selectedRobots.filter(r => r !== robot) : [...prev.selectedRobots, robot],
    }));
    setErrors((prev) => ({
      ...prev,
      selectedRobots: "",
    }));
  }, [newUser]);

  const validateForm = React.useCallback(() => {
    let isValid = true;
    setErrors(initUser);
    const errors = { ...initUser };
    Object.entries(newUser).forEach(([key, value]) => {
      if (!value) {
        errors[key] = "Поле не может быть пустым.";
        isValid = false;
      }
      if (key === "email") {
        if (value && !EMAIL_VALIDATOR.test(value)) {
          errors[key] = "Неверный формат email.";
          isValid = false;
        }
      }
      if (key === "selectedRobots" && value.length === 0) {
        errors[key] = "Выберите минимум одного робота.";
        isValid = false;
      }
    });
    setErrors(errors);
    return isValid;
  }, [newUser]);

  const register = React.useCallback(async () => {
    if (!validateForm()) return;
    setRegistering(true);
    console.log("NEW ", newUser);
    const reqBody = { ...newUser };
    await addUser(reqBody);
    setNewUser(initUser);
    setErrors(initUser);
    setRegistering(false);
  }, [newUser, addUser, validateForm]);

  return (
    <Stack
      spacing={3}
      boxShadow="0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12),
    0px 9px 12px rgba(0, 0, 0, 0.14)"
      p={4}
      borderRadius="20px"
      backgroundColor="white"
    >
      <FormControl id="name" isRequired>
        <FormLabel>Имя</FormLabel>
        {errors.name && (
          <Text color="red" fontSize="xs">
            {errors.name}
          </Text>
        )}
        <Input
          placeholder="Имя"
          name="name"
          value={newUser.name}
          onChange={changeUserData}
          isInvalid={errors.name}
          maxLength={50}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        {errors.email && (
          <Text color="red" fontSize="xs">
            {errors.email}
          </Text>
        )}
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={newUser.email}
          onChange={changeUserData}
          isInvalid={errors.email}
        />
      </FormControl>

      {isAdmin ? (
        <>
          <FormControl id="admin-password" isRequired>
            <FormLabel>Admin-пароль</FormLabel>
            {errors.telegram && (
              <Text color="red" fontSize="xs">
                {errors.telegram}
              </Text>
            )}
            <Input
              placeholder="Admin-пароль"
              name="adminPswd"
              value={adminPswd}
              onChange={({ target }) => setAdminPswd(target.value)}
              isInvalid={adminPswd && adminPswd !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD}
            />
          </FormControl>
          <Button
            colorScheme="teal"
            alignSelf="center"
            w="100%"
            disabled={adminPswd !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD}
          >
            <Link href="/admin">Go to ADMIN</Link>
          </Button>
        </>
      ) : (
        <>
          <FormControl id="count" isRequired>
            <FormLabel>Номер счёта</FormLabel>
            {errors.count && (
              <Text color="red" fontSize="xs">
                {errors.count}
              </Text>
            )}
            <Input
              placeholder="Номер счёта"
              name="count"
              value={newUser.count}
              onChange={changeUserData}
              isInvalid={errors.count}
              maxLength={30}
            />
          </FormControl>
          <FormControl id="selectedRobots">
            <FormLabel>Хочу вот эти роботы</FormLabel>
            {errors.selectedRobots && (
              <Text color="red" fontSize="xs">
                {errors.selectedRobots}
              </Text>
            )}
            <HStack spacing={0} direction="row" flexWrap="wrap" justifyContent="flex-start">
              {robotDescription.map(({ title }) => (
                <Checkbox
                  key={title}
                  size="md"
                  colorScheme="green"
                  fontSize="10px" pr={4}
                  isChecked={newUser.selectedRobots.includes(title)}
                  onChange={() => handleCheckbox(title)}
                >
                  {title}
                </Checkbox>
              ))}
            </HStack>
          </FormControl>
          <Button
            colorScheme="green"
            alignSelf="center"
            w="100%"
            onClick={register}
            isLoading={isRegistering}
          >
            Регистрация
          </Button>
        </>
      )}
    </Stack>
  );
}

export default ContactForm;
