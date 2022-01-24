import { Layout } from "../components/organisms/Layout/Layout";
import { CheckoutView } from "../components/organisms/CheckoutView/CheckoutView";
import { AuthChecker } from "../components/organisms/AuthChecker/AuthChecker";

const Checkout = () => {
  return (
    <AuthChecker>
      <Layout>
        <CheckoutView />
      </Layout>
    </AuthChecker>
  );
};

export default Checkout;
