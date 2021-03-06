import StripeCheckout, { Token } from "react-stripe-checkout";
import { memo } from "react";
import { StyledButton } from "./Button.styles";

type StripeButtonProps = {
  readonly price: number;
};

export const StripeButton = memo<StripeButtonProps>(({ price }) => {
  const validPrice = price * 100;
  const key = "test_token";
  const onToken = (token: Token) => console.log(token);

  return (
    <StripeCheckout
      name="Wardrobe!"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/rdw9mYM/wardrobe.png"
      description={`Total cost is  $${price}`}
      amount={validPrice}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={key}
      alipay
      bitcoin
    >
      <StyledButton disabled={price <= 0} id="pay-now-btn">
        pay now
      </StyledButton>
    </StripeCheckout>
  );
});

StripeButton.displayName = "StripeButton";
