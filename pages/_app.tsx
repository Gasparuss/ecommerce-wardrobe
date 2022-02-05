import "../styles/global.scss";
import "../styles/variables.scss";
import "dotenv-safe/config";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { MainProvider } from "../context/MainContext";
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";
import Head from "next/head";

const meta = {
  title: "Great wardrobes!",
  description:
    "This app is e-commerce project where you can buy your dream wardrobe.",
};

export const titleTemplate = `%s | ${meta.title}`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo title={meta.title} description={meta.description} />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
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
