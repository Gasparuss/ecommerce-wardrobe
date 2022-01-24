export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const inputValidation = {
  email: {
    required: { value: true, message: "Email is required." },
    pattern: {
      value: EMAIL_REGEX,
      message: "Email must be a valid email.",
    },
  },
  password: {
    required: { value: true, message: "Password is required." },
    pattern: {
      value: PASSWORD_REGEX,
      message:
        "Password must contain an uppercase letter, a special character, a number and must be at least 8 characters long.",
    },
  },
  other: {
    required: { value: true, message: "This field is required." },
    minLength: {
      value: 3,
      message: "This field must be at least 3 characters. ",
    },
  },
};

export const wardrobeColors = [
  {
    label: "brown" as const,
    palette: {
      main: "774836",
      secondary: "8F5741",
      handle: "C4A451",
    },
  },
  {
    label: "black" as const,
    palette: {
      main: "000",
      secondary: "1E1E1E",
      handle: "C4A451",
    },
  },
  {
    label: "gray" as const,
    palette: {
      main: "808080",
      secondary: "B2B1B1",
      handle: "000",
    },
  },
  {
    label: "smoke" as const,
    palette: {
      main: "F5F5F5",
      secondary: "FEFCFC",
      handle: "000",
    },
  },
];
