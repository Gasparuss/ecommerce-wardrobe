import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta name="msapplication-TileColor" content="#fce61d" />
          <meta name="theme-color" content="#fce61d" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="apple-mobile-web-app-title" content="Furniture? Sofa!" />
          <script />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
