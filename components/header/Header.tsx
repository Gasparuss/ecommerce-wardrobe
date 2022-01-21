import { HeroLink } from '../herolink/HeroLink';
import { StyledHeader, StyledRightPannelWrapper, StyledBasketWrapper } from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <HeroLink />
      <StyledRightPannelWrapper>
        <StyledBasketWrapper>Czesc</StyledBasketWrapper>
      </StyledRightPannelWrapper>
    </StyledHeader>
  );
};

export default Header;
