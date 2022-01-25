import { GetStaticProps } from "next";
import { AuthChecker } from "../components/organisms/AuthChecker/AuthChecker";
import { Layout } from "../components/organisms/Layout/Layout";
import { Main } from "../components/organisms/Main/Main";
import { DatoCMSData } from "../lib/datocms";
import type { Wardrobe } from "../types";
import { gql, GraphQLClient } from "graphql-request";

const Home = ({ results }: { results: Wardrobe[] }) => {
  console.log(results);

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
  // const endpoint = "https://graphql.datocms.com/";
  // const graphQLClient = new GraphQLClient(endpoint, {
  //   headers: {
  //     "content-type": "application/json",
  //     authorization: "Bearer " + process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
  //   },
  // });
  // const data = await graphQLClient.request(query);
  // console.log(data);
  // return {
  //   props: { results: data },
  // };

  try {
    const data = await DatoCMSData.items.all();

    return { props: { results: data }, revalidate: 1 };
  } catch {
    return {
      notFound: true as const,
    };
  }
};
