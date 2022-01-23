import styled from "styled-components";

export const StyledCartWrapper = styled.div`
  position: relative;
  margin-right: 1.7rem;
`;

export const StyledCartButton = styled.button`
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  font-family: inherit;
`;

export const StyledCartProductsCount = styled.span`
  position: absolute;
  top: 28%;
  left: 55%;
  transform: translate(-50%, -30%);
  font-size: 1.5rem;

  @media all and (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export const StyledCartListWrapper = styled.div`
  position: absolute;
  top: 5.5rem;
  right: -8rem;
  z-index: 10;
`;
