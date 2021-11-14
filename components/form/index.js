import React, { forwardRef } from "react";
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

import { useAppState } from "../../stores/AppStore";

// Helpers
import { validateCountNumber } from "../../utils";

const initUser = { name: "", email: "", count: "", selectedRobots: [] };
const EMAIL_VALIDATOR = /\S+@\S+\.\S+/;
const ADMIN = process.env.NEXT_PUBLIC_ADMIN;

const ERRORS = {
  emptyField: "Поле не может быть пустым.",
  wrongEmail: "Неверный формат email.",
  noRobotsSelected: "Выберите минимум одного робота.",
  wrongPartnerCode: "Данный торговый счёт не найден в нашей партнерской сети.",
};

const ContactForm = forwardRef(({ addUser }, ref) => {
  //App state
  const { AppState, AppStateDispatch } = useAppState();
  const { robots, selectedRobots } = AppState;

  const [isRegistering, setRegistering] = React.useState(false);
  const [newUser, setNewUser] = React.useState(initUser);
  const [errors, setErrors] = React.useState(initUser);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [adminPswd, setAdminPswd] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    setNewUser((prev) => ({
      ...prev,
      selectedRobots,
    }));
  }, [selectedRobots]);

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

  const handleCheckbox = React.useCallback(
    (robot) => {
      const wasSelected = newUser.selectedRobots.includes(robot);
      AppStateDispatch({
        type: "setSelectedRobots",
        payload: wasSelected
          ? newUser.selectedRobots.filter((r) => r !== robot)
          : [...newUser.selectedRobots, robot],
      });
      setErrors((prev) => ({
        ...prev,
        selectedRobots: "",
      }));
    },
    [newUser, AppStateDispatch]
  );

  const validateForm = React.useCallback(() => {
    let isValid = true;
    setErrors(initUser);
    const errors = { ...initUser };
    Object.entries(newUser).forEach(([key, value]) => {
      if (!value) {
        errors[key] = ERRORS.emptyField;
        isValid = false;
      }
      if (key === "email") {
        if (value && !EMAIL_VALIDATOR.test(value)) {
          errors[key] = ERRORS.wrongEmail;
          isValid = false;
        }
      }
      if (key === "selectedRobots" && value.length === 0) {
        errors[key] = ERRORS.noRobotsSelected;
        isValid = false;
      }
      if (key === "count" && !validateCountNumber(value)) {
        errors[key] = ERRORS.wrongPartnerCode;
        isValid = false;
      }
    });
    setErrors(errors);
    return isValid;
  }, [newUser]);

  const resetForm = React.useCallback(() => {
    setNewUser(initUser);
    AppStateDispatch({
      type: "setSelectedRobots",
      payload: [],
    });
    setErrors(initUser);
  }, [AppStateDispatch]);

  const register = React.useCallback(async () => {
    const isFormDataValid = validateForm();
    if (!isFormDataValid) return;

    setRegistering(true);
    const reqBody = { ...newUser, created: Date.now() };
    await addUser(reqBody);
    resetForm();
    setRegistering(false);
  }, [newUser, addUser, validateForm, resetForm]);

  return (
    <Stack
      tabIndex="100"
      ref={ref}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      spacing={3}
      boxShadow={
        isFocused
          ? "0px 8px 14px rgba(30, 150, 94, 0.5), 0px 10px 20px rgba(222, 218, 0, 0.42), 0px 12px 16px rgba(30, 150, 94, 0.64)"
          : "0px 5px 6px rgba(0, 0, 0, 0.2), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 9px 12px rgba(0, 0, 0, 0.14)"
      }
      p={4}
      borderRadius="20px"
      backgroundColor="white"
      outline="none"
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
              isInvalid={
                adminPswd &&
                adminPswd !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD
              }
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
              maxLength={6}
            />
          </FormControl>
          <FormControl id="selectedRobots">
            <FormLabel>Хочу вот эти роботы</FormLabel>
            {errors.selectedRobots && (
              <Text color="red" fontSize="xs">
                {errors.selectedRobots}
              </Text>
            )}
            <HStack
              spacing={0}
              direction="row"
              flexWrap="wrap"
              justifyContent="flex-start"
            >
              {robots.map(({ title }) => (
                <Checkbox
                  key={title}
                  size="md"
                  colorScheme="green"
                  fontSize="10px"
                  pr={4}
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
});

ContactForm.displayName = "Contact Form";

export default ContactForm;
