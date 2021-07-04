import React from "react";
import {
  Stack,
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const initUser = { name: "", email: "", telegram: "" };
const EMAIL_VALIDATOR = /\S+@\S+\.\S+/;
const ADMIN = process.env.NEXT_PUBLIC_ADMIN;

function ContactForm({ addUser }) {
  const [isRegistering, setRegistering] = React.useState(false);
  const [newUser, setNewUser] = React.useState(initUser);
  const [errors, setErrors] = React.useState(initUser);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [adminPswd, setAdminPswd] = React.useState("");

  const changeUserData = React.useCallback(({ target: { name, value } }) => {
    if (name === "email" && value === ADMIN) {
      setIsAdmin(true);
    }
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const validateForm = React.useCallback(() => {
    let isValid = true;
    setErrors(initUser);
    const errors = { ...initUser };
    Object.entries(newUser).forEach(([key, value]) => {
      if (!value && key !== "telegram") {
        errors[key] = "Поле не может быть пустым.";
        isValid = false;
      }
      if (key === "email") {
        if (value && !EMAIL_VALIDATOR.test(value)) {
          errors[key] = "Неверный формат email.";
          isValid = false;
        }
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
    if (!newUser.telegram) {
      reqBody.telegram = 'Не указан';
    }
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
      <FormControl id="telegram">
        <FormLabel>Telegram</FormLabel>
        {errors.telegram && (
          <Text color="red" fontSize="xs">
            {errors.telegram}
          </Text>
        )}
        <Input
          placeholder="Telegram"
          name="telegram"
          value={newUser.telegram}
          onChange={changeUserData}
          isInvalid={errors.telegram}
        />
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

      {isAdmin && (
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
      )}
    </Stack>
  );
}

export default ContactForm;
