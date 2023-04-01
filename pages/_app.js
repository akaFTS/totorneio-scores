import React from "react";
import Head from "next/head";
import "style/reset.css";
import "style/vars.css";
import "style/colors.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Totorneio Scoreboard</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
