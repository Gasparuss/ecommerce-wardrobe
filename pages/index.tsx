import { GetStaticProps } from "next";
import { AuthChecker } from "../components/organisms/AuthChecker/AuthChecker";
import { Layout } from "../components/organisms/Layout/Layout";
import { Main } from "../components/organisms/Main/Main";
import { DatoCMSData } from "../lib/datocms";
import type { Wardrobe } from "../types";

const Home = ({ results }: { results: Wardrobe[] }) => {
  return (
    <AuthChecker>
      <Layout>
        <Main results={results} />
      </Layout>
    </AuthChecker>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await DatoCMSData.items.all();

    return { props: { results: data }, revalidate: 1 };
  } catch {
    return {
      notFound: true as const,
    };
  }
};
