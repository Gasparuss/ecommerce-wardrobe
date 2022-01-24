import { wardrobeColors } from "../../../utils/consts";
import { useProduct } from "../../../context/ProductContext";
import Image from "next/image";
import { HeroLink } from "../../atoms/Link/HeroLink/HeroLink";
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
import { useRouter } from "next/router";
import { auth } from "../../../lib/firebase";

type HeroProps = {
  isHome?: boolean;
};

export const Hero = memo<HeroProps>(({ isHome = true }) => {
  const router = useRouter();
  const { activeWardrobeColor } = useProduct();
  const handleGoBack = () => {
    router.back();
  };

  const handleLogout = () => {
    auth.signOut();
    return router.push("/login");
  };

  const [selectedPalette, setSelectedPalette] = useState(
    wardrobeColors[0].palette,
  );

  useEffect(() => {
    setSelectedPalette(
      wardrobeColors.find((color) => color.label === activeWardrobeColor)!
        .palette,
    );
  }, [activeWardrobeColor]);

  return (
    <StyledHeroWrapper isHome={isHome}>
      {isHome ? (
        <StyledHeroHeading>
          <HeroLink />
        </StyledHeroHeading>
      ) : (
        <StyledHeroHeader>
          <StyledHeroBackBtn onClick={handleGoBack}>
            <Image
              src="/svg/back.svg"
              width="40"
              height="40"
              alt="arrow-left"
            />
          </StyledHeroBackBtn>
          <StyledRightHeroPanel>
            <Cart />
            <StyledButton onClick={handleLogout}>logout</StyledButton>
          </StyledRightHeroPanel>
        </StyledHeroHeader>
      )}
      <StyledHeroImage>
        <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
          <polygon
            fill={"#" + selectedPalette.main}
            points="55,0 3,0 3,4 5,4 5,6 53,6 53,4 55,4 "
          />

          <rect x="3" fill={"#" + selectedPalette.main} width="52" height="4" />
          <rect
            x="8"
            y="6"
            fill={"#" + selectedPalette.main}
            width="42"
            height="46"
          />
          <rect
            x="28"
            y="6"
            fill={"#" + selectedPalette.secondary}
            width="2"
            height="46"
          />
          <rect
            x="11"
            y="39"
            fill={"#" + selectedPalette.secondary}
            width="15"
            height="10"
          />
          <rect
            x="32"
            y="39"
            fill={"#" + selectedPalette.secondary}
            width="15"
            height="10"
          />
          <rect
            x="11"
            y="9"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="20"
            y="9"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="11"
            y="18"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="20"
            y="18"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="11"
            y="27"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="20"
            y="27"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="32"
            y="9"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="41"
            y="9"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="32"
            y="18"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="41"
            y="18"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="32"
            y="27"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />
          <rect
            x="41"
            y="27"
            fill={"#" + selectedPalette.secondary}
            width="6"
            height="6"
          />

          <path
            fill={"#" + selectedPalette.handle}
            d="M26,37h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S26.552,37,26,37z"
          />
          <path
            fill={"#" + selectedPalette.handle}
            d="M34,37h-2c-0.552,0-1-0.447-1-1s0.448-1,1-1h2c0.552,0,1,0.447,1,1S34.552,37,34,37z"
          />

          <polygon
            fill={"#" + selectedPalette.main}
            points="47,52 11,52 8,52 5,52 5,58 11,58 11,56 47,56 47,58 53,58 53,56 53,52 "
          />
        </svg>
      </StyledHeroImage>
    </StyledHeroWrapper>
  );
});

Hero.displayName = "Hero";
