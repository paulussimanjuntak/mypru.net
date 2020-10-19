import Head from "next/head";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>MyPru</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/static/images/ico.png" />
        <link rel="stylesheet" href="/static/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/static/css/utility.min.css" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <style jsx global>{`
        body {
          font-size: 14px;
          padding-top: 64px;
        }
        .hover-pointer:hover{
          cursor: pointer;
        }
        .fw-500 {
          font-weight: 500 !important;
        }

        /* ANT DROPDOWN */
        .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title{
          color: rgba(0, 0, 0, 0.7);
        }
        /* ANT DROPDOWN */
      `}</style>
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default App;
