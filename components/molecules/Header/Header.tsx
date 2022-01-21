import { HeroLink } from '../../atoms/HeroLink/HeroLink';
import {
  StyledHeader,
  StyledRightPannelWrapper,
  StyledBasketWrapper,
} from './Header.styles';
import { Cart } from '../Cart/Cart';
import { StyledButton } from '../../atoms/Button/Button.styles';

const Header = () => {
  return (
    <StyledHeader>
      <HeroLink />
      <StyledRightPannelWrapper>
        <StyledBasketWrapper>
          <Cart />
        </StyledBasketWrapper>
        <StyledButton>Logout</StyledButton>
      </StyledRightPannelWrapper>
    </StyledHeader>
  );
};

export default Header;
