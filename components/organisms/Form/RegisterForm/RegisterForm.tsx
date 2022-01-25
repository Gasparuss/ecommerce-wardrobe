import { StyledInput } from "../../../atoms/Input/Input.styles";
import { StyledButton } from "../../../atoms/Button/Button.styles";
import { StyledInputError } from "../../../atoms/Input/InputError.styles";
import { useForm } from "react-hook-form";
import { inputValidation } from "../../../../utils/consts";
import { UserData } from "../../../../types";
import Link from "next/link";
import { StyledLink } from "../../../atoms/Link/Link.styles";
import { auth } from "../../../../lib/firebase";
import { useMainContext } from "../../../../context/MainContext";

import {
  StyledFormWrapper,
  StyledFormHeading,
  StyledForm,
  StyledLabel,
  StyledFormSignature,
} from "../FormStyles";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { setLoading, setModal } = useMainContext();

  const handleRegister = async ({ email, password }: UserData | any) => {
    setLoading(true);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setModal({
        isOpen: true,
        type: "success",
        message: "Account was creater, Log in!",
      });
      reset();
    } catch (e: any) {
      setModal({ isOpen: true, type: "error", message: e?.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledFormHeading>sign up</StyledFormHeading>
      <StyledForm onSubmit={handleSubmit(handleRegister)}>
        <StyledLabel>
          <span className="sr-only">email</span>
          <StyledInput
            id="email"
            placeholder="Email"
            autoComplete="email"
            {...register("email", inputValidation.email)}
          />
          <StyledInputError>{errors?.email?.message}</StyledInputError>
        </StyledLabel>
        <StyledLabel>
          <span className="sr-only">password</span>
          <StyledInput
            id="password"
            placeholder="Password"
            type="password"
            autoComplete="new-password"
            {...register("password", inputValidation.password)}
          />
          <StyledInputError>{errors?.password?.message}</StyledInputError>
        </StyledLabel>
        <StyledButton id="submit">sign up</StyledButton>
      </StyledForm>
      <StyledFormSignature>
        Already have an account?{" "}
        <Link href="/login">
          <StyledLink>Sign in</StyledLink>
        </Link>
      </StyledFormSignature>
    </StyledFormWrapper>
  );
};
