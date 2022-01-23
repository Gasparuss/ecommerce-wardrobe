import React, { memo } from "react";
import type { Wardrobe } from "../../../types";
import { ColorSelect } from "../../molecules/ColorSelect/ColorSelect";
import { StyledButton } from "../../atoms/Button/Button.styles";
import { useProduct } from "../../../context/ProductContext";
import { useCart } from "../../../context/CartContext";
import { useMainContext } from "../../../context/MainContext";
import { wardrobeColors } from "../../../utils/consts";
import {
  StyledProductColorSelectTitle,
  StyledProductCost,
  StyledProductDescription,
  StyledProductDescriptionText,
  StyledProductName,
  StyledProductOperations,
  StyledProductType,
} from "./ProductDescription.styles";

type ProductDescriptionProps = {
  readonly product: Wardrobe;
};

export const ProductDescription = memo<ProductDescriptionProps>(
  ({ product }) => {
    const { setActiveWardrobeColor } = useProduct();
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      window.scrollTo(0, 0);
      setActiveWardrobeColor(
        e.target.value as typeof wardrobeColors[number]["label"],
      );
    };

    const { handleAddToCart } = useCart();
    const { setModal } = useMainContext();

    const handleAddProductToCart = () => {
      handleAddToCart(product);
      setModal({
        isOpen: true,
        type: "success",
        message: "Successfully added to cart!",
      });
    };

    return (
      <StyledProductDescription>
        <StyledProductName>{product.name}</StyledProductName>
        <StyledProductType>
          type: <span className="bold">{product.wardrobetype}</span>
        </StyledProductType>
        <StyledProductDescriptionText>
          {product.description}
        </StyledProductDescriptionText>
        <StyledProductColorSelectTitle>
          Color preview
        </StyledProductColorSelectTitle>
        <ColorSelect onChange={handleColorChange} />
        <StyledProductOperations>
          <StyledProductCost>${product.cost}</StyledProductCost>
          <StyledButton onClick={handleAddProductToCart} id="add-to-cart-btn">
            Add to cart
          </StyledButton>
        </StyledProductOperations>
      </StyledProductDescription>
    );
  },
);

ProductDescription.displayName = "ProductDescription";
