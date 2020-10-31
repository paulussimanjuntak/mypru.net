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
    image: "/static/images/benefits/fleksibel.png",
    description: "Fleksibel dalam memilih tipe dan batas harga kamar rawat inap dan area perlindungan sesuai kebutuhan"
  },
  {
    image: "/static/images/benefits/65-miliar-1.png",
    description: "Batas Manfaat tahunan sesuai Plan yang dipilih beserta dengan PRUSolusi Sehat Limit Booster"
  },
  {
    image: "/static/images/benefits/pre-post.png",
    description: "Perawatan rawat jalan 30 hari sebelum dan 90 hari sesudah tindakan bedah Rawat Jalan"
  },
  {
    image: "/static/images/benefits/PRUSolusi-Sehat-Highlight-4.png",
    description: "Jika terjadi risiko perawatan di luar wilayah pertanggungan akan dibayarkan sesuai persentase (%)"
  },
]

const title = "PRUSolusi Sehat"
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
            src="/static/images/banner/pss-banner.png"
          />
        </Carousel.Item>
      </Carousel>

      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p>
              PRUSolusi Sehat  adalah Produk Asuransi Kesehatan Tradisional yang memberikan solusi lengkap dan fleksibel untuk perlindungan kesehatan dengan pembayaran manfaat sesuai tagihan rumah sakit untuk beberapa manfaat berdasarkan plan yang dipilih pada Tabel Manfaat PRUSolusi Sehat serta jangkauan perlindungan hingga seluruh dunia yang memberikan fleksibilitas atas pilihan Perlindungan kesehatan Anda*.
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
                <img
                  className="d-block w-100 bor-rad-10px shadow"
                  src="/static/images/pss.png"
                />
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
