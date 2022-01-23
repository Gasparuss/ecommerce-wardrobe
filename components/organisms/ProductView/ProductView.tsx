import { memo } from "react";
import { Hero } from "../Hero/Hero";
import type { Wardrobe } from "../../../types";
import { ProductDescription } from "../ProductDescription/ProductDescription";
import { StyledProductViewWrapper } from "./ProductView.styles";

type ProductViewProps = {
  readonly product: Wardrobe;
};

export const ProductView = memo<ProductViewProps>(({ product }) => {
  return (
    <StyledProductViewWrapper>
      <ProductDescription product={product} />
    </StyledProductViewWrapper>
  );
});
