import Image from "next/image";
import { StyledHomeSection, StyledHomeSectionTitle } from "./HomeBanner.styles";

export const HomeBanner = () => {
  return (
    <StyledHomeSection>
      <StyledHomeSectionTitle>
        Only with us the quality of the product
      </StyledHomeSectionTitle>
      <Image src="/svg/wardrobe.svg" width="350" height="350" alt="wardrobe" />
    </StyledHomeSection>
  );
};
