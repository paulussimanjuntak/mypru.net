import { Fab, Action } from "react-tiny-fab";
import Head from "next/head";

import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-tiny-fab/dist/styles.css";

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
        <Fab 
          alwaysShowTitle={false}
          icon={<i className="far fa-plus" />}
          style={{ bottom: 0, right: 0 }}
          event="hover"
        >
          <Action text="WhatsApp">
            <a href="https://wa.me/6281234567890" target="_blank" className="text-decoration-none text-reset">
              <i className="fab fa-lg fa-whatsapp" />
            </a>
          </Action>
          <Action text="Telepon">
            <a href="tel:6281234567890" target="_blank" className="text-decoration-none text-reset">
              <i className="far fa-phone-alt" />
            </a>
          </Action>
        </Fab>
      </Layout>

      <style jsx global>{`
        body {
          font-size: 14px;
          padding-top: 64px;
        }
        section {
          padding: 60px 0;
        }
        .hover-pointer:hover {
          cursor: pointer;
        }
        .fw-500 {
          font-weight: 500 !important;
        }
        .text-danger-2{
          color: #cf1322;
        }
        blockquote {
          border-left: 5px solid #ebebeb;
          margin: 1.5em 0px;
          padding: 0.5em 20px;
        }
        blockquote p::before {
          content: open-quote;
        }

        blockquote p::after {
          content: close-quote;
        }
        blockquote p {
          display: inline;
          font-size: 100%;
        }
        .border-type-1 {
          border: 1px solid rgb(0 0 0 / 4%);
        }
        .bor-rad-10px{
          border-radius: 10px;
        }
        .truncate-3 {
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        .truncate-4 {
          -webkit-line-clamp: 4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }


        /* ANT DROPDOWN */
        .ant-dropdown-menu-item,
        .ant-dropdown-menu-submenu-title {
          color: rgba(0, 0, 0, 0.7);
        }
        /* ANT DROPDOWN */

        /* ANT BUTTON */
        .ant-btn-danger:hover,
        .ant-btn-danger:focus {
          color: #fff;
          background: #f5222d;
          border-color: #f5222d;
        }
        .ant-btn-success:hover,
        .ant-btn-success:focus {
          color: #fff;
          background-color: #237804;
          border-color: rgba(40, 167, 69, 0.1);
        }
        /* ANT BUTTON */
        /* ANT ICON */
        .anticon {
          vertical-align: 0.1em;
        }
        /* ANT ICON */

        /*SLICK-SLIDE*/
        .slick-slide {
          // padding: 0px 5px;
        }
        .slick-list {
          // margin: 0 -1em;
        }
        .slick-prev,
        .slick-next {
          font-size: 15px !important;
        }
        .slick-prev:before,
        .slick-next:before {
          content: "" !important;
        }
        .slick-slider > i.arrow-slick:before,
        i.arrow-slick:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        /*SLICK-SLIDE*/

        @media only screen and (max-width: 991px) {
          section {
            padding: 30px 0;
          }
        }
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
