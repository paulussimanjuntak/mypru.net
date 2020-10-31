import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import Button from "antd-button-color";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import { bannerSettings } from "lib/slickSetting";

import CardBanner from "components/Card/Banner";
const CardBannerMemo = React.memo(CardBanner);

import CardArticle from "components/Card/ArticleHome";
const CardArticleMemo = React.memo(CardArticle);

import { articleData } from "data/article";
import { agentData } from "data/agent";

const banners = [
  { image: "/static/images/banner/pph-banner.png", link: "/products/pruprime-healthcare-plus" },
  { image: "/static/images/banner/pss-banner.png", link: "/products/prusolusi-sehat" },
  { image: "/static/images/banner/prutop-banner.png", link: "/products/prutotal-critical-protection" },
  { image: "/static/images/banner/pcb88-banner.png", link: "/products/prucritical-benefit-88" },
  { image: "/static/images/banner/prucinta-banner.png", link: "/products/prucinta" },
  { image: "/static/images/banner/pruworks-banner.png", link: "/products/pruwork" },
]

const Home = () => {
  return (
    <>
      <section className="banner-section pt-0">
        <Slider {...bannerSettings}>
          {banners.map((data, i) => (
            <Col key={i} className="px-0">
              <CardBannerMemo image={data.image} link={data.link} />
            </Col>
          ))}
        </Slider>
      </section>

      <Container>
        <section className="p-t-0-s p-t-60-m p-t-60-t">
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <h4 className="fs-20-s text-capitalize">
                Asuransi kesehatan yang memberikan perlindungan komplit dan fleksibel
              </h4>
              <p className="fs-16 fs-14-s text-dark">
                PRUPrime Healthcare Plus adalah produk Asuransi Tambahan (Riders) yang memberikan solusi lengkap untuk perlindungan kesehatan dengan pembayaran manfaat sesuai tagihan rumah sakit. Produk ini dirancang khusus untuk memberikan jangkauan perlindungan hingga ke seluruh dunia serta menawarkan fleksibilitas pada pilihan perlindungan kesehatan Anda*.
              </p>
              <Link href="/products/pruprime-healthcare-plus">
                <a>
                  <Button
                    type="success"
                    size="large"
                    shape="round"
                    className="shadow-none mb-3"
                  >
                    PRUPrime Healthcare Plus
                  </Button>
                </a>
              </Link>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="embed-responsive embed-responsive-16by9 bor-rad-10px shadow">
                <iframe
                  className="embed-responsive-item bor-rad-10px"
                  src="https://www.youtube.com/embed/zhq4Q53n7PQ"
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
        </section>

      </Container>

      <section style={{ backgroundColor: "#f5f5f5" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h4 className="fs-20-s">
                Bayar Premi/Kontribusi Kini Lebih Mudah!
              </h4>
              <p className="fs-16 fs-14-s text-dark mb-lg-0">
                Pembayaran Premi/Kontribusi dan Biaya Perubahan Polis, serta
                pendaftaran autodebit untuk kartu kredit dan kartu debit,
                sekarang dapat dilakukan di sini.
              </p>
            </Col>
            <Col lg={4} className="text-center">
              <Button type="danger" size="large" shape="round">
                <a
                  rel="noreferrer"
                  href="https://payment.prudential.co.id/"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Bayar Sekarang
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <section className="pb-5">
          <h3 className="fs-20-s mb-4">
            Artikel
            <Link href="/articles">
              <a className="float-right fs-12 pt-3 text-black-50">Lihat Semua</a>
            </Link>
          </h3>
          <Row>
            {articleData.slice(0,3).map((data, i) => (
              <Col md={4} sm={6} key={i}>
                <CardArticleMemo article={data} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>

      <section className="pt-0">
        <Container className="about-section">
          <Card.Body className="p-lg-5 p-md-5">
            <Row className="align-items-center">
              <Col sm={12} md={6}>
                <img alt="MyPru.net - about" src="/static/images/about.jpg" className="w-100 bor-rad-10px mb-4 mb-md-0 mb-lg-0" />
              </Col>
              <Col sm={12} md={6}>
                <h3 className="fs-20-s mb-4">Tentang Kami</h3>
                <p className="text-justify fs-16 mb-0">
                  Kami merupakan Partner bisnis dari PT. Prudential Life Assurance sejak 2012 dan bernaung dibawah Sahadewa Agency yang Berkantor di Jl. Hangtuah No 1 Sanur - Bali. Tugas kami adalah memberikan solusi terbaik untuk perencanaan asuransi sesuai dengan kebutuhan dan kemampuan anda. serta Memberikan pelayanan yang profesional dan berintegritas untuk melayani masyarakat secara luas di seluruh Indonesia.
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </section>

      <section className="pb-2 pt-0">
        <Container>
          <Row className="mb-4">
            {agentData.map((data, i) => (
              <Col className="text-center mb-3 img-agen" key={i}>
                <Image 
                  quality={60}
                  width={267}
                  height={267}
                  src={data.image} 
                  className="img-fit mb-2 mb-md-0 mb-lg-0 rounded-circle shadow" 
                  alt={`MyPru.net - ${data.name}`}
                />
                <h5 className="fs-16-s mt-3">{data.name}</h5>
                <p>
                  {data.description}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style jsx>{`
        :global(.about-section){
          border-radius: 10px;
          background-color: #f5f5f5;
        }

        :global(.img-agen > div){
          margin-left: auto;
          margin-right: auto;
        }

        @media only screen and (min-width: 600px) {
          :global(.banner-section .slick-prev, .banner-section .slick-next) {
            opacity: 0;
            transition: 0.3s all;
          }
          :global(.banner-section:hover .slick-prev, .banner-section:hover
              .slick-next) {
            opacity: 1;
          }
          :global(.slick-next) {
            right: 25px;
          }
          :global(.slick-prev) {
            left: 25px;
          }
        }

        @media only screen and (max-width: 600px) {
          :global(.testimoni-section .slick-slider > .slick-dots) {
            bottom: -10px;
          }
          :global(.banner-section .slick-slider > .slick-dots) {
            bottom: 10px;
          }
          :global(.slick-next) {
            right: 10px;
          }
          :global(.slick-prev) {
            left: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
