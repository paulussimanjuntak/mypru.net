import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'antd-button-color'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

import style from 'components/Products/detailStyle'

const benefitsData = [
  {
    image: "/static/images/benefits/warisan-1.png",
    description: "Hingga Tertanggung berusia 99 tahun"
  },
  {
    image: "/static/images/benefits/warisan-2.png",
    description: "Masa Pembayaran Premi dapat dipilih 5/10/15 tahun"
  },
  {
    image: "/static/images/benefits/warisan-3.png",
    description: "Apabila Tertanggung masih hidup hingga berusia 99 tahun"
  },
]

const title = "Asuransi Jiwa PRUWarisan"
const linkWA = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_TELEPON}&text=Hi%2C%20Saya%20ingin%20mengetahui%20lebih%20lanjut%3A%0ANama%3A%20%0AUsia%3A%20%0APekerjaan%3A%20%0APesan%3A%20`

const ProductItem = () => {
  return(
    <>
      <Carousel
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/images/banner/pruwarisan-banner.png"
          />
        </Carousel.Item>
      </Carousel>

      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p className="mb-2">
              <strong>Jaminan siap pakai untuk masa depan</strong>
            </p>
            <p>
              Memperkenalkan Asuransi Jiwa PRUWarisan (PRUWarisan), Produk Asuransi Jiwa dengan perlindungan seumur hidup, yang memberikan solusi perencanaan warisan bagi keluarga Indonesia. <br /> <br />

              Perlindungan Asuransi Jiwa Tradisional hingga usia 99 tahun dengan masa pembayaran Premi yang dapat dipilih sebagai warisan siap pakai untuk menjamin keberlangsungan masa depan.

            </p>
            <Link href={linkWA}>
              <a target="_blank">
                <Button
                  type="success"
                  size="large"
                  className="shadow-none"
                >
                  Info Lebih Lanjut
                </Button>
              </a>
            </Link>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <h4 className="font-weight-normal fs-18-s mb-3">Keuntungan {title}</h4>
          <Row className="justify-content-between">
            {benefitsData.map((data, i) => (
              <Col key={i} lg={3} md={6} className="col-6 mb-4">
                <Card className="border-0">
                  <Image src={data.image} className="bg-light mb-2" thumbnail />
                  <Card.Text className="text-center">
                    {data.description}
                  </Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Card.Body className="py-0">
            <Row className="align-items-center justify-content-center">
              <Col sm={12} md={8}>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    allowFullScreen
                    className="embed-responsive-item bor-rad-10px"
                    src="https://www.youtube.com/embed/4InEmf_hEC4"
                  />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </section>

      <style jsx>{style}</style>
    </>
  )
}

export default ProductItem