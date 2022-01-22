import styled from "styled-components";

export const StyledProductTitle = styled.a`
  width: 100%;
  position: relative;
  flex: 0 1 30rem;
  margin: 2rem;
  cursor: pointer;
`;

export const StyledProductTitleFlashCard = styled.h3`
  position: absolute;
  bottom: 12%;
  right: 0;
  background-color: var(--white-100);
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
`;

export const StyledProductTitleFlashCardCost = styled.span`
  font-weight: normal;
  font-size: 1.2rem;
  padding-right: 0.5rem;
`;
