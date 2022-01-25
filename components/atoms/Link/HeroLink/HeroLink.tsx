import Link from "next/link";
import { StyledHeroLink, StyledHeroLinkQuestion } from "./HeroLink.styles";
export const HeroLink = () => {
  return (
    <Link href="/" replace passHref>
      <StyledHeroLink>
        <StyledHeroLinkQuestion>Wardrobe</StyledHeroLinkQuestion>
      </StyledHeroLink>
    </Link>
  );
};
