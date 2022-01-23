import { memo } from "react";
import { Wardrobe } from "../../../../types";
import Image from "next/image";
import {
  StyledCartListItem,
  StyledItemCost,
  StyledItemDescription,
  StyledItemName,
  StyledRemoveItemButton,
} from "./CartProduct.styles";

type CartProductProps = {
  readonly product: Wardrobe & { quantity: number };
  readonly onRemoveItem: (product: Wardrobe & { quantity: number }) => void;
};

export const CartProduct = memo<CartProductProps>(
  ({ product, onRemoveItem }) => {
    return (
      <StyledCartListItem data-testid="cart-product">
        <StyledItemDescription>
          <StyledItemName>{product.name}</StyledItemName>
          <StyledItemCost>
            {product.quantity} x ${product.cost}
          </StyledItemCost>
        </StyledItemDescription>
        <StyledRemoveItemButton onClick={() => onRemoveItem(product)}>
          <Image src="/svg/close.svg" width="20" height="20" alt="close" />
        </StyledRemoveItemButton>
      </StyledCartListItem>
    );
  },
);
