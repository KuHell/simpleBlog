import "../styles/globals.css";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }: any) {
  // const getLayout =
  //   Component.getLayout || ((page: any) => <Layout>{page}</Layout>);

  // return getLayout(<Component {...pageProps} />);
  return <Component {...pageProps} />;
}
