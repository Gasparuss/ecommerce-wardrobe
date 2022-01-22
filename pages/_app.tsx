import "../styles/global.scss";
import "../styles/variables.scss";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { MainProvider } from "../context/MainContext";
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";

const meta = {
  title: "Furniture Sofa!",
  description:
    "This app is e-commerce project where you can buy your dream sofa.",
};

export const titleTemplate = `%s | ${meta.title}`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo title={meta.title} description={meta.description} />
      <MainProvider>
        <ProductProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </ProductProvider>
      </MainProvider>
    </>
  );
}
