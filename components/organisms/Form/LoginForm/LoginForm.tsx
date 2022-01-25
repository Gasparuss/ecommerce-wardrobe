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
import { useEffect } from "react";

import { useRouter } from "next/router";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    auth.signOut();
  }, []);

  const router = useRouter();
  const { setLoading, setModal } = useMainContext();

  const handleLogin = async ({ email, password }: UserData) => {
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/");
    } catch (e: any) {
      setModal({ isOpen: true, type: "error", message: e?.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledFormHeading>sign in</StyledFormHeading>
      <StyledForm onSubmit={handleSubmit(handleLogin)}>
        <StyledLabel>
          <span className="sr-only">email</span>
          <StyledInput
            id="email"
            placeholder="E-mail"
            autoComplete="email"
            {...register("email", inputValidation.email)}
          />
          <StyledInputError role="alert">
            {errors?.email?.message}
          </StyledInputError>
        </StyledLabel>
        <StyledLabel>
          <span className="sr-only">password</span>
          <StyledInput
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            id="password"
            {...register("password", inputValidation.password)}
          />
          <StyledInputError role="alert">
            {errors?.password?.message}
          </StyledInputError>
        </StyledLabel>
        <StyledButton id="submit">sign in</StyledButton>
      </StyledForm>
      <StyledFormSignature>
        Haven't got an account?{" "}
        <Link href="/register">
          <StyledLink>Sign up</StyledLink>
        </Link>
      </StyledFormSignature>
    </StyledFormWrapper>
  );
};
