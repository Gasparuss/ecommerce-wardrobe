import { memo } from "react";
import { Sofa } from "../../../../types";
import { useCart } from "../../../../context/CartContext";
import {
  StyledCartList,
  StyledCartListWrapper,
  StyledEmptyCart,
} from "./CartList.styles";
import { CartProduct } from "../../../atoms/Product/CartProduct/CartProduct";
import Link from "next/link";
import { StyledButton } from "../../../atoms/Button/Button.styles";

type CartListProps = {
  readonly cartItems: (Sofa & {
    quantity: number;
  })[];
};

export const CartList = memo<CartListProps>(({ cartItems }) => {
  const { handleRemoveFromCart } = useCart();

  return (
    <StyledCartListWrapper id="cart-list">
      <StyledCartList>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return (
              <CartProduct
                onRemoveItem={handleRemoveFromCart}
                product={cartItem}
                key={cartItem.id}
              />
            );
          })
        ) : (
          <StyledEmptyCart>Cart is empty</StyledEmptyCart>
        )}
      </StyledCartList>
      <Link href="/checkout">
        <StyledButton>Checkout</StyledButton>
      </Link>
    </StyledCartListWrapper>
  );
});

CartList.displayName = "CartList";
