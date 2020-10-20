import Slider from "react-slick";
import Button from "antd-button-color";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

let banners = ['/static/images/banner/1.png', '/static/images/banner/2.png', '/static/images/banner/2.png']

import { bannerSettings } from "lib/slickSetting";

import CardBanner from "components/Card/Banner";
const CardBannerMemo = React.memo(CardBanner);

const Home = () => {
  return(
    <>
      <Container>
        <section className="banner-section">
          <Slider {...bannerSettings}>
            {banners.map((data, i) => (
              <Col key={i} className="px-0">
                <CardBannerMemo image={data} />
              </Col>
            ))}
          </Slider>
        </section>

        <section>
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12}>
              <h3 className="fs-22-s">Asuransi Kesehatan Prudential Paling Murah!</h3>
              <p className="fs-16 fs-14-s text-dark">
                Prudential pada tahun 2020 baru saja meluncurkan PRUSolusi Sehat, yang merupakan produk asuransi kesehatan tradisional dengan premi yang sangat murah dan terjangkau. <br /> <br />
Apa itu asuransi kesehatan tradisional? Anda bisa bayangkan seperti BPJS Kesehatan dari pemerintah, namun dengan pelayanan yang premium, terbaik, dan nyaman.
              </p>

              <Button type="success" size="large" className="shadow-none">PRUSolusi Sehat</Button>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen />
              </div>
            </Col>
          </Row>
        </section>
      </Container>

      <style jsx>{`
        @media only screen and (min-width: 600px){
          :global(.banner-section .slick-list){
            padding-top: 25px !important;
            padding-bottom: 18px !important;
            padding-left: 20% !important;
            padding-right: 20% !important;
            margin-left: 0px;
            margin-right: 0px;
          }
          :global(.banner-section .slick-slide){
            transform: scale(0.8, 0.8);
            transition: transform 0.3s;
          }
          :global(.banner-section .slick-slide.slick-center){
            transform: scale(1.2);
          }
          :global(.banner-section .slick-prev, .banner-section .slick-next){
            opacity: 0;
            transition: .3s all;
          }
          :global(.banner-section:hover .slick-prev, .banner-section:hover .slick-next){
            opacity: 1;
          }
        }

        @media only screen and (max-width: 600px){
          :global(.banner-section .slick-slider > .slick-dots){
            bottom: -15px;
          }
          :global(.slick-next){
            right: -10px;
          }
          :global(.slick-prev){
            left: -10px;
          }
        }
      `}</style>
    </>
  )
}

export default Home
