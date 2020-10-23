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
  { icon: "fab fa-instagram", link: "https://instagram.com/" },
  { icon: "fab fa-facebook-f", link: "https://www.facebook.com/" },
  { icon: "fab fa-youtube", link: "https://www.youtube.com/" },
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
                <a className="link-section" key={i}>
                  <p>{data.label}</p>
                </a>
              ))}
            </Col>
            <Col lg={3} sm={12}>
              <h5 className="footer-title">Kontak Kami</h5>
              <p className="text-footer">
                <i className="fal fa-phone mr-2" /> +62812345123
              </p>
              <p className="text-footer">
                <i className="fal fa-envelope mr-2" /> info@mypru.net
              </p>
              <p className="text-footer">
                <i className="fal fa-map-marker-alt mr-2" /> Jalan Raya Kerobokan 70 Kuta Utara, Kabupaten Badung, Bali, Indonesia
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
