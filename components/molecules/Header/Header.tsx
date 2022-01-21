import { HeroLink } from '../../atoms/HeroLink/HeroLink';
import {
  StyledHeader,
  StyledRightPannelWrapper,
  StyledBasketWrapper,
} from './Header.styles';
import { Cart } from '../Cart/Cart';

const Header = () => {
  return (
    <StyledHeader>
      <HeroLink />
      <StyledRightPannelWrapper>
        <StyledBasketWrapper>
          <Cart />
        </StyledBasketWrapper>
      </StyledRightPannelWrapper>
    </StyledHeader>
  );
};

export default Header;
