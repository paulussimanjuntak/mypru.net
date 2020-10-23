import Link from "next/link";
import Slider from "react-slick";
import Button from "antd-button-color";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";

import { bannerSettings, testimoniSettings } from "lib/slickSetting";

import CardBanner from "components/Card/Banner";
const CardBannerMemo = React.memo(CardBanner);

import CardTestimoni from "components/Card/Testimoni";
const CardTestimoniMemo = React.memo(CardTestimoni);

import CardArticle from "components/Card/ArticleHome";
const CardArticleMemo = React.memo(CardArticle);

import { testimoniData } from "data/testimoni";
import { articleData } from "data/article";
import { agentData } from "data/agent";

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
        <section className="p-t-0-s p-t-60-m p-t-60-t">
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <h4 className="fs-20-s">
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
              <Link href="/products/prusolusi-sehat">
                <a>
                  <Button
                    type="success"
                    size="large"
                    shape="round"
                    className="shadow-none mb-3"
                  >
                    PRUSolusi Sehat
                  </Button>
                </a>
              </Link>
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
          <h3 className="fs-20-s text-center mb-4">Testimonials</h3>
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
          {/* <div className="text-center"> */}
          {/*   <Link href="/articles"> */}
          {/*     <a> */}
          {/*       <Button type="lightdark" size="large" shape="round"> */}
          {/*         Lihat Semua */}
          {/*       </Button> */}
          {/*     </a> */}
          {/*   </Link> */}
          {/* </div> */}
        </section>
      </Container>

      <section className="pt-0">
        <Container className="about-section">
          <Card.Body className="p-5">
            <Row className="align-items-center">
              <Col sm={12} md={6}>
                <img src="/static/images/about-item.png" className="w-100" />
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

      {/* <section className="aboutus-section"> */}
      {/*   <Container className="bg-danger"> */}
      {/*     <h3 className="fs-20-s text-center mb-4">Tentang Kami</h3> */}
      {/*     <p className="text-center fs-16"> */}
      {/*       Kami merupakan Partner bisnis dari PT. Prudential Life Assurance sejak 2012 dan bernaung dibawah Sahadewa Agency yang Berkantor di Jl. Hangtuah No 1 Sanur - Bali. Tugas kami adalah memberikan solusi terbaik untuk perencanaan asuransi sesuai dengan kebutuhan dan kemampuan anda. serta Memberikan pelayanan yang profesional dan berintegritas untuk melayani masyarakat secara luas di seluruh Indonesia. */}
      {/*     </p> */}
      {/*   </Container> */}
      {/* </section> */}

      <section className="pb-2 pt-0">
        <Container>
          <h3 className="fs-20-s text-center mb-4">Tim Kami</h3>
          <Row className="mb-4">
            {agentData.map((data, i) => (
              <Col className="text-center mb-3" key={i}>
                <Image 
                  roundedCircle
                  src="/static/images/profile.png" 
                  className="img-fit mb-2 mb-md-0 mb-lg-0" 
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
        // .aboutus-section{
        //   position: relative;
        //   background-image: url("/static/images/aboutus-banner.png");
        //   background-size: cover;
        // }
        //
        
        :global(.about-section){
          border-radius: 10px;
          background-color: #f5f5f5;
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
