import { memo } from "react";
import type { Wardrobe } from "../../../../types";
import Image from "next/image";
import Link from "next/link";
import {
  StyledProductTitle,
  StyledProductTitleFlashCard,
  StyledProductTitleFlashCardCost,
} from "./ProductTitle.styles";

type ProductProps = {
  readonly product: Wardrobe;
};

export const ProductTitle = memo<ProductProps>(({ product }) => {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <StyledProductTitle data-testid="product-title">
        {product.imgurl ? (
          <Image
            src={`${product.imgurl}`}
            width="100%"
            height="100%"
            layout="responsive"
            alt={product.name}
          />
        ) : null}

        <StyledProductTitleFlashCard>
          <StyledProductTitleFlashCardCost>
            ${product.cost}
          </StyledProductTitleFlashCardCost>
          {product.name}
        </StyledProductTitleFlashCard>
      </StyledProductTitle>
    </Link>
  );
});

ProductTitle.displayName = "ProductTitle";
