import { ProductTitle } from "../../../atoms/Product/ProductTitle/ProductTitle";
import type { Sofa } from "../../../../types";
import { memo } from "react";
import {
  StyledEmptyResults,
  StyledProductsListWrapper,
} from "./ProductsList.styles";

type ProductsListProps = {
  readonly products: Sofa[];
};

export const ProductsList = memo<ProductsListProps>(({ products }) => {
  return (
    <StyledProductsListWrapper>
      {products.length ? (
        products.map((product) => {
          return <ProductTitle product={product} key={product.id} />;
        })
      ) : (
        <StyledEmptyResults>Sorry, we can't load products</StyledEmptyResults>
      )}
    </StyledProductsListWrapper>
  );
});

ProductsList.displayName = "ProductsList";
