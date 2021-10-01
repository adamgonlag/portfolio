import Layout from "../components/Layout";
import "../styles/globals.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [initialLoad, setinitialLoad] = useState(true);

  return (
    <>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {initialLoad && <Loader setinitialLoad={setinitialLoad} />}
      </AnimatePresence>
      {!initialLoad && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
