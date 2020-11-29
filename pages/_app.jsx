import { Fab, Action } from "react-tiny-fab";
import Head from "next/head";

import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-tiny-fab/dist/styles.css";

import Router from "next/router";
import withFBQ from "next-fbq";
import Layout from "components/Layout";

const emailStyle = { backgroundColor: "#1890ff" };
const waStyle = { backgroundColor: "#25D366" };
const phoneStyle = { backgroundColor: "#f39c12" };

const linkWA = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_TELEPON}&text=Hi%2C%20Saya%20ingin%20mengetahui%20lebih%20lanjut%3A%0ANama%3A%20%0AUsia%3A%20%0APekerjaan%3A%20%0APesan%3A%20`

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>MyPru | Your Trusted Insurance Planner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Your Trusted Insurance Planner" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN} />
        <link rel="icon" href="/static/images/ico.png" />
        <link rel="stylesheet" href="/static/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/static/css/utility.min.css" />
      </Head>

      <Layout>
        <Component {...pageProps} />
        <Fab
          alwaysShowTitle={false}
          icon={<i className="far fa-comments fa-lg" />}
          style={{ bottom: 0, right: 0 }}
          event="hover"
        >
          <Action text="Email" style={emailStyle}>
            <a
              rel="noreferrer"
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              target="_blank"
              className="text-decoration-none text-reset"
            >
              <i className="far fa-envelope" />
            </a>
          </Action>
          <Action text="WhatsApp" style={waStyle}>
            <a
              rel="noreferrer"
              href={linkWA}
              target="_blank"
              className="text-decoration-none text-reset"
            >
              <i className="fab fa-lg fa-whatsapp" />
            </a>
          </Action>
          <Action text="Telepon" style={phoneStyle}>
            <a
              rel="noreferrer"
              href={`tel:${process.env.NEXT_PUBLIC_TELEPON}`}
              target="_blank"
              className="text-decoration-none text-reset"
            >
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
        .text-danger-2 {
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
        .bor-rad-10px {
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

        .rtf.open .rtf--mb > * {
          transform: rotate(0deg) !important;
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

export default withFBQ(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID, Router)(App);
