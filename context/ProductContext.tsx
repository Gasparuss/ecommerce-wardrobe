import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { wardrobeColors } from "../utils/consts";
import type { Wardrobe } from "../types/index";

type ProductContext = {
  products: Wardrobe[];
  setProducts: Dispatch<SetStateAction<Wardrobe[]>>;
  minPrice: number;
  setMinPrice: Dispatch<SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: Dispatch<SetStateAction<number>>;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  filteredProducts: Wardrobe[];
  setFilteredProducts: Dispatch<SetStateAction<Wardrobe[]>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  productsTypes: string[];
  setProductsTypes: Dispatch<SetStateAction<string[]>>;
  activeSofaColor: typeof wardrobeColors[number]["label"];
  setActiveSofaColor: Dispatch<
    SetStateAction<typeof wardrobeColors[number]["label"]>
  >;
  handleChangeSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectProductTypes: (
    options: { value: string; label: string }[],
  ) => void;
};

const ProductContext = createContext<ProductContext>({
  products: [],
  setProducts: () => {},
  minPrice: 0,
  setMinPrice: () => {},
  maxPrice: 2000,
  setMaxPrice: () => {},
  price: 350,
  setPrice: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  productsTypes: [],
  setProductsTypes: () => {},
  activeSofaColor: "yellow",
  setActiveSofaColor: () => {},
  handleChangeSearchQuery: () => {},
  handleChangePrice: () => {},
  handleSelectProductTypes: () => {},
});

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("Error while reading context!");
  }

  return context;
};

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Wardrobe[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Wardrobe[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [productsTypes, setProductsTypes] = useState<string[]>([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>(
    [],
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [price, setPrice] = useState(350);
  const [activeSofaColor, setActiveSofaColor] =
    useState<typeof wardrobeColors[number]["label"]>("yellow");

  const handleSelectProductTypes = (
    types: { value: string; label: string }[],
  ) => {
    setSelectedProductTypes(types.map((type) => type.value));
  };

  useEffect(() => {
    handleFilterProducts();
  }, [price, searchQuery, selectedProductTypes]);

  const handleFilterProducts = () => {
    setFilteredProducts(
      products
        .filter((product) =>
          product.name.toLowerCase().startsWith(searchQuery.toLowerCase()),
        )
        .filter((product) => product.cost <= price)
        .filter((product) => {
          if (!selectedProductTypes.length) {
            return true;
          }

          if (selectedProductTypes.includes(product.wardrobetype)) {
            return true;
          }

          return false;
        }),
    );
  };

  const handleChangeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  useEffect(() => {
    setMinPrice(Math.min(...products.map((product) => product.cost)));
    setMaxPrice(Math.max(...products.map((product) => product.cost)));
    setPrice(Math.max(...products.map((product) => product.cost)));
    setProductsTypes([
      ...new Set(products.map((product) => product.wardrobetype)),
    ]);
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        price,
        setPrice,
        filteredProducts,
        setFilteredProducts,
        searchQuery,
        setSearchQuery,
        productsTypes,
        setProductsTypes,
        activeSofaColor,
        setActiveSofaColor,
        handleChangeSearchQuery,
        handleChangePrice,
        handleSelectProductTypes,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
