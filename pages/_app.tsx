import '../styles/global.scss';
import '../styles/variables.scss';
import type { AppProps } from 'next/app';

const meta = {
  title: 'Great Boots!',
  description: 'This app is e-commerce project where you can buy your dream sofa.',
};

export const titleTemplate = `%s | ${meta.title}`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
