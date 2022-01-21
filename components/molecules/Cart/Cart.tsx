import Image from 'next/image';
import { useState } from 'react';
import { useWindowSize } from '../../../hooks';

import {
  StyledCartWrapper,
  StyledCartButton,
  StyledCartProductsCount,
  StyledCartListWrapper,
} from './Cart.styles';

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { width } = useWindowSize();
  return (
    <StyledCartWrapper>
      <StyledCartButton
        onClick={() => setIsCartOpen((open) => !open)}
        id="cart-btn"
      >
        <Image
          src="/svg/cart.svg"
          width={width && width > 1100 ? '45' : '40'}
          height={width && width > 1100 ? '45' : '40'}
          alt="cart"
        />
        <StyledCartProductsCount>COUNT</StyledCartProductsCount>
      </StyledCartButton>
    </StyledCartWrapper>
  );
};
