import React, { memo } from "react";
import type { Wardrobe } from "../../../../types";
import { useCart } from "../../../../context/CartContext";
import { StripeButton } from "../../../atoms/Button/StripeButton";
import { CheckoutProduct } from "../../../atoms/Product/CheckoutProduct/CheckoutProduct";
import {
  StyledCheckoutListWrapper,
  StyledCheckoutList,
  StyledEmptyCheckoutList,
  StyledCheckoutSummary,
  StyledTotalCost,
} from "./CheckoutList.styles";

type CheckoutListProps = {
  readonly cartItems: (Wardrobe & { quantity: number })[];
};

export const CheckoutList = memo<CheckoutListProps>(({ cartItems }) => {
  const { getTotalCost, handleRemoveFromCart, handleChangeProductQuantity } =
    useCart();

  return (
    <StyledCheckoutListWrapper id="checkout-list">
      {cartItems.length ? (
        <StyledCheckoutList>
          {cartItems.map((cartItem) => {
            return (
              <CheckoutProduct
                product={cartItem}
                onRemoveItem={handleRemoveFromCart}
                onChangeItemQuantity={handleChangeProductQuantity}
                key={cartItem.id}
              />
            );
          })}
        </StyledCheckoutList>
      ) : (
        <StyledEmptyCheckoutList>Cart is empty</StyledEmptyCheckoutList>
      )}
      <StyledCheckoutSummary>
        <StyledTotalCost>${getTotalCost()}</StyledTotalCost>
        <StripeButton price={getTotalCost()} />
      </StyledCheckoutSummary>
    </StyledCheckoutListWrapper>
  );
});
