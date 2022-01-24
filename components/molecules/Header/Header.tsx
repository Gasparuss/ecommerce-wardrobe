import { HeroLink } from "../../atoms/Link/HeroLink/HeroLink";
import {
  StyledHeader,
  StyledRightPannelWrapper,
  StyledBasketWrapper,
} from "./Header.styles";
import { Cart } from "../Cart/Cart";
import { StyledButton } from "../../atoms/Button/Button.styles";
import { useRouter } from "next/router";
import { auth } from "../../../lib/firebase";

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    auth.signOut();
    return router.push("/login");
  };
  return (
    <StyledHeader>
      <HeroLink />
      <StyledRightPannelWrapper>
        <StyledBasketWrapper>
          <Cart />
        </StyledBasketWrapper>
        <StyledButton onClick={handleLogout}>Logout</StyledButton>
      </StyledRightPannelWrapper>
    </StyledHeader>
  );
};

export default Header;
