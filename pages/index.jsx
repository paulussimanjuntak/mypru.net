import Link from "next/link";
import Slider from "react-slick";
import Button from "antd-button-color";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";

import { bannerSettings, testimoniSettings } from "lib/slickSetting";

import CardBanner from "components/Card/Banner";
const CardBannerMemo = React.memo(CardBanner);

import CardTestimoni from "components/Card/Testimoni";
const CardTestimoniMemo = React.memo(CardTestimoni);

import CardArticle from "components/Card/Article";
const CardArticleMemo = React.memo(CardArticle);

import { testimoniData } from "data/testimoni";
import { articleData } from "data/article";

const banners = [
  "/static/images/banner/11.png",
  "/static/images/banner/22.png",
  "/static/images/banner/11.png",
  "/static/images/banner/44.png",
  "/static/images/banner/33.png",
];

const Home = () => {
  return (
    <>
      <section className="banner-section pt-0">
        <Slider {...bannerSettings}>
          {banners.map((data, i) => (
            <Col key={i} className="px-0">
              <CardBannerMemo image={data} />
            </Col>
          ))}
        </Slider>
      </section>

      <Container>
        <section>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <h4 className="fs-26-s">
                Asuransi Kesehatan Prudential Paling Murah!
              </h4>
              <p className="fs-16 fs-14-s text-dark">
                Prudential pada tahun 2020 baru saja meluncurkan PRUSolusi
                Sehat, yang merupakan produk asuransi kesehatan tradisional
                dengan premi yang sangat murah dan terjangkau. <br /> <br />
                Apa itu asuransi kesehatan tradisional? Anda bisa bayangkan
                seperti BPJS Kesehatan dari pemerintah, namun dengan pelayanan
                yang premium, terbaik, dan nyaman.
              </p>
              <Button
                type="success"
                size="large"
                shape="round"
                className="shadow-none mb-3"
              >
                PRUSolusi Sehat
              </Button>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/KRaWnd3LJfs"
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
        </section>

        <section className="testimoni-section">
          <h3 className="fs-26-s text-center mb-4">Testimonials</h3>
          <Slider {...testimoniSettings}>
            {testimoniData.map((testimoni, i) => (
              <Col key={i}>
                <CardTestimoniMemo data={testimoni} />
              </Col>
            ))}
          </Slider>
        </section>
      </Container>

      <section style={{ backgroundColor: "#f5f5f5" }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h4 className="fs-26-s">
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

      <section style={{ backgroundColor: "rgb(250 250 250)" }}>
        <Container>
          <h3 className="fs-26-s text-center mb-4">Tentang Kami</h3>
          <p className="text-center">
            Kami merupakan Partner bisnis dari PT. Prudential Life Assurance sejak 2012 dan bernaung dibawah Sahadewa Agency yang Berkantor di Jl. Hangtuah No 1 Sanur - Bali. Tugas kami adalah memberikan solusi terbaik untuk perencanaan asuransi sesuai dengan kebutuhan dan kemampuan anda. serta Memberikan pelayanan yang profesional dan berintegritas untuk melayani masyarakat secara luas di seluruh Indonesia
          </p>
        </Container>
      </section>

      <section className="pt-0" style={{ backgroundColor: "rgb(250 250 250)" }}>
        <Container>
          <Row className="align-items-center mb-4">
            <Col sm={{ order: 'first', span: 12 }} md={{ order: '12', span: 6 }} lg={{ order: '12', span: 4 }}>
              <Image 
                rounded 
                src="https://mekari.com/wp-content/uploads/2019/07/img-umkm.png" 
                className="w-100 img-fit mb-4 mb-md-0 mb-lg-0" 
                style={{height: 250}} 
              />
            </Col>
            <Col sm={{ order: 'last', span: 12 }} md={{ order: '1', span: 6 }} lg={{ order: '1', span: 8 }}>
              <h4 className="fs-18-s">Putu Prima Sulisthiana, SE, QWP®, AWP®</h4>
              <p>
                Putu Prima Sulisthiana, SE, QWP®, AWP® adalah seorang Agency Director di Prudential dan Qualified Wealth Planner selama lebih dari 10 tahun di industri Asuransi, dengan berbagai pencapaian karir setiap tahunnya. Sebagai seorang member PRU Elite Club dan PRU Service Mark.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col sm={{ order: 'first', span: 12 }} md={{ order: '1', span: 6 }} lg={{ order: '1', span: 4 }}>
              <Image 
                rounded 
                src="https://mekari.com/wp-content/uploads/2019/07/img-umkm.png" 
                className="w-100 img-fit mb-4 mb-md-0 mb-lg-0" 
                style={{height: 250}} 
              />
            </Col>
            <Col sm={{ order: 'last', span: 12 }} md={{ order: '12', span: 6 }} lg={{ order: '12', span: 8 }}>
              <h4 className="fs-18-s">I Wayan Agus Supratman, SE, AWP®</h4>
              <p>
                I Wayan Agus Supratman, SE, AWP® adalah seorang Financial Advisor di Prudential dan Associated Wealth Planner selama lebih dari 8 tahun di industri Asuransi,dengan berbagai pencapaian karir setiap tahunnya. Sebagai member PRU Elite Club dan juga seorang member dari Asosiasi Premier Profesional Finansial internasional atau MDRT®
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <section className="pb-5">
          <h3 className="fs-26-s text-center mb-4">Artikel</h3>
          <Row>
            {articleData.slice(0,3).map((data, i) => (
              <Col md={4} sm={6} key={i}>
                <CardArticleMemo article={data} />
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <Link href="/articles">
              <a>
                <Button type="lightdark" size="large" shape="round">
                  Lihat Semua
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </Container>

      <style jsx>{`
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
