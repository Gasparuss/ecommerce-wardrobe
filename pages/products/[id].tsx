import type { Wardrobe } from "../../types";
import { Layout } from "../../components/organisms/Layout/Layout";
import { ProductView } from "../../components/organisms/ProductView/ProductView";
import { GetStaticProps, GetStaticPaths } from "next";
import { DatoCMSData } from "../../lib/datocms";
import { AuthChecker } from "../../components/organisms/AuthChecker/AuthChecker";

const Product = ({ product }: { product: Wardrobe }) => {
  return (
    <AuthChecker>
      <Layout>
        <ProductView product={product} />
      </Layout>
    </AuthChecker>
  );
};

export default Product;

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const product: Wardrobe = await DatoCMSData.items.find(context.params!.id);

    if (!product) {
      return {
        notFound: true as const,
      };
    }

    return { props: { product } };
  } catch {
    return {
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
      },
      notFound: true as const,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const results: Wardrobe[] = await DatoCMSData.items.all();
    return {
      paths: results.map(({ id }) => ({
        params: { id },
      })),
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
      },
      fallback: "blocking" as const,
    };
  } catch (err) {
    throw err;
  }
};
