import { memo, useEffect } from "react";
import { useProduct } from "../../../context/ProductContext";
import { Sofa } from "../../../types";
import Header from "../../molecules/Header/Header";
import { HomeBanner } from "../../molecules/HomeBanner/HomeBanner";
import { ProductsList } from "../../molecules/List/ProductsList/ProductsList";
import { Preferences } from "../../molecules/Preferences/Preferences";
import { StyledMainWrapper, StyledMainContent } from "./Main.styles";

type MainProps = {
  readonly results: Sofa[];
};

export const Main = memo<MainProps>(({ results }) => {
  const { setProducts, setFilteredProducts, filteredProducts } = useProduct();

  useEffect(() => {
    setProducts(results);
    setFilteredProducts(results);
  }, [results, setFilteredProducts, setProducts]);

  return (
    <StyledMainWrapper>
      <Header />
      <StyledMainContent>
        <HomeBanner />
        <Preferences />
        <ProductsList products={filteredProducts} />
      </StyledMainContent>
    </StyledMainWrapper>
  );
});

Main.displayName = "Main";
