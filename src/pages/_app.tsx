import "bootstrap/dist/css/bootstrap.min.css";

import "@/styles/globals.css";
import "@/styles/header.scss";

import { store } from "@/store";
import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import Layout from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
