import Head from "next/head";

import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>MyPru | Your Trusted Insurance Planner</title>
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
        section {
          margin-top: 1.5rem;
          margin-bottom: 5rem;
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

        /*SLICK-SLIDE*/
        .slick-slide {
          padding: 0px 15px;
        }
        .slick-list {
          margin: 0 -1em;
        }
        .slick-prev, .slick-next {
          font-size: 15px !important;
        }
        .slick-prev:before, .slick-next:before  {
          content: '' !important;
        }
        .slick-slider > i.arrow-slick:before, i.arrow-slick:before{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        /*SLICK-SLIDE*/
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
