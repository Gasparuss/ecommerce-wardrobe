import { memo } from "react";
import { Wardrobe } from "../../../../types";
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
  readonly cartItems: (Wardrobe & {
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
      <Link href="/checkout" passHref>
        <StyledButton>Checkout</StyledButton>
      </Link>
    </StyledCartListWrapper>
  );
});

CartList.displayName = "CartList";
