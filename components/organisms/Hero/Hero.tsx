import { sofaColors } from "../../../utils/consts";
import { useProduct } from "../../../context/ProductContext";
import Image from "next/image";
import { HeroLink } from "../../atoms/HeroLink/HeroLink";
import { Cart } from "../../molecules/Cart/Cart";
import { memo, useState, useEffect } from "react";
import { StyledButton } from "../../atoms/Button/Button.styles";
import {
  StyledHeroBackBtn,
  StyledHeroHeader,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroWrapper,
  StyledRightHeroPanel,
} from "./Hero.styles";

type HeroProps = {
  isHome?: boolean;
};

export const Hero = memo<HeroProps>(({ isHome = true }) => {
  const { activeSofaColor } = useProduct();

  return <div>Hero</div>;
});
