import { Space } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "antd-button-color";

import { nasabahMenuData } from "data/navbar";

const year = new Date();

const Footer = () => {
  return (
    <>
      <footer className="border-top">
        <Container className="pt-3">
          <Row className="justify-content-between">
            <Col lg={4} sm={12}>
              <div className="footer-logo">
                <img src="/static/images/logo.png" width="180" />
              </div>
              <Space>
                <Button
                  type="lightdark"
                  className="shadow-none"
                  icon={<i className="fab fa-instagram" />}
                />
                <Button
                  type="lightdark"
                  className="shadow-none"
                  icon={<i className="fab fa-facebook-f" />}
                />
                <Button
                  type="lightdark"
                  className="shadow-none"
                  icon={<i className="fab fa-youtube" />}
                />
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
                <i className="fal fa-phone mr-2" /> +628113885929
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
              <a className="link-section">
                <p>Artikel</p>
              </a>
              <a className="link-section">
                <p>Payment Link</p>
              </a>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container className="mb-4">
          <p>
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
