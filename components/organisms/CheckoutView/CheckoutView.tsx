import { Hero } from "../Hero/Hero";
import { CheckoutList } from "../../molecules/List/CheckoutList/CheckoutList";
import { useCart } from "../../../context/CartContext";
import { useWindowSize } from "../../../hooks";
import { Header } from "next/dist/lib/load-custom-routes";
import { StyledCheckoutList } from "../../molecules/List/CheckoutList/CheckoutList.styles";
import { StyledCheckoutViewWrapper } from "./CheckoutView.styles";

export const CheckoutView = () => {
  const { cartItems } = useCart();
  const { width } = useWindowSize();
  return (
    <StyledCheckoutViewWrapper>
      {width && width < 1000 ? <Header /> : <Hero isHome={false} />}
      <CheckoutList cartItems={cartItems} />
    </StyledCheckoutViewWrapper>
  );
};
