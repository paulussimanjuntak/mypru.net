import { Space } from "antd";
import Link from 'next/link';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "antd-button-color";

import { nasabahMenuData } from "data/navbar";

const year = new Date();

const footerLinks = [
  { label: "Artikel", link: "/articles" },
  { label: "Produk Kami", link: "/products" },
]

const socialMedia = [
  { icon: "fab fa-instagram", link: process.env.NEXT_PUBLIC_INSTAGRAM },
  { icon: "fab fa-facebook-f", link: process.env.NEXT_PUBLIC_FACEBOOK },
  { icon: "fab fa-youtube", link: process.env.NEXT_PUBLIC_YOUTUBE },
]

const Footer = () => {
  return (
    <>
      <footer className="border-top">
        <Container className="pt-4 pt-sm-5 pt-md-5 pt-lg-5">
          <Row className="justify-content-between">
            <Col lg={4} sm={12}>
              <div className="footer-logo">
                <img src="/static/images/logo.png" width="180" />
              </div>
              <Space>
                {socialMedia.map((data, i) => (
                  <a href={data.link} target="_blank" key={i}>
                    <Button
                      type="lightdark"
                      className="shadow-none"
                      style={{ borderRadius: "5px" }}
                      icon={<i className={data.icon} />}
                    />
                  </a>
                ))}
              </Space>
              <p className="text-footer mt-2 mb-0">
                MyPru adalah salah satu dari sekian banyak agen asuransi Prudential di Indonesia lewat komunitas atau agency MRT Group.
              </p>
            </Col>
            <Col lg={3} sm={12} className="pl-lg-5">
              <h5 className="footer-title">Layanan Nasabah</h5>
              {nasabahMenuData.map((data, i) => (
                <div key={i}>
                  {data.link ? (
                    <Link href={`/customer/${data.link}`}>
                      <a className="link-section">
                        <p>{data.label}</p>
                      </a>
                    </Link>
                  ) : (
                    <a
                      href="https://payment.prudential.co.id/"
                      target="_blank"
                      className="link-section"
                    >
                      <p>{data.label}</p>
                    </a>
                  )}
                </div>
              ))}
            </Col>
            <Col lg={3} sm={12}>
              <h5 className="footer-title">Kontak Kami</h5>
              <p className="text-footer">
                <i className="fal fa-phone mr-2" /> {process.env.NEXT_PUBLIC_TELEPON}
              </p>
              <p className="text-footer">
                <i className="fal fa-envelope mr-2" /> {process.env.NEXT_PUBLIC_EMAIL}
              </p>
              <p className="text-footer">
                <i className="fal fa-map-marker-alt mr-2" /> Jalan Hangtuah No 1 Denpasar, Bali, Indonesia 80228
              </p>
            </Col>
            <Col lg={2} sm={12}>
              <h5 className="footer-title">Links</h5>
              {footerLinks.map((data, i) => (
                <Link href={data.link} key={i}>
                  <a className="link-section">
                    <p>{data.label}</p>
                  </a>
                </Link>
              ))}
              <a className="link-section" target="_blank" href="https://payment.prudential.co.id/">
                <p>Payment Link</p>
              </a>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <p className="pb-3">
            Copyright &copy; {year.getFullYear()} All Rights Reserved by{" "}
            <a className="link-section">MyPru.net</a>
          </p>
        </Container>
      </footer>

      <style jsx>{`
        .footer-logo{
          display: block;
          margin-bottom: .6rem;
        }
        .link-section, .text-footer{
          color: rgba(0,0,0,.7);
        }
        .text-footer{
          margin-bottom: .5rem;
        }
        .link-section > p, .link-section{
          margin-bottom: .5rem;
          user-select: none;
        }
        .link-section:hover{
          color: rgba(0,0,0,.85);
          text-decoration: none;
        }
        @media only screen and (max-width: 991px) {
          .footer-title{
            margin-top: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
