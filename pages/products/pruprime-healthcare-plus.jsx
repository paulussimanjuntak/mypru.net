import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'antd-button-color'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
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
    description: "Untuk Plan Diamond dengan Batas Manfaat Tahunan Rp15 Miliar ditambah PRUPrime Limit Booster Rp50 Miliar"
  },
  {
    image: "/static/images/benefits/pre-post.png",
    description: "Perawatan rawat jalan 30 hari sebelum dan 90 hari sesudah tindakan bedah Rawat Jalan"
  },
  {
    image: "/static/images/benefits/manfaat-rawat-jalan.png",
    description: "Jika terjadi risiko perawatan di luar wilayah pertanggungan akan dibayarkan sesuai persentase (%)"
  },
]

const title = "PRUPrime Healthcare Plus"
const linkWA = "https://api.whatsapp.com/send?phone=6281234567890&text=Nama%3A%20%0AUmur%3A%0APekerjaan%3A."

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
            src="/static/images/banner/pph-banner.png"
          />
        </Carousel.Item>
      </Carousel>

      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p className="mb-2">
              <strong>Perlindungan Komplit dan Fleksibel</strong>
            </p>
            <p>
              PRUPrime Healthcare Plus adalah produk Asuransi Tambahan (Riders) yang memberikan solusi lengkap untuk perlindungan kesehatan dengan pembayaran manfaat sesuai tagihan rumah sakit untuk sebagian besar manfaat pada Tabel Manfaat PRUPrime Healthcare Plus. Produk ini dirancang khusus untuk memberikan jangkauan perlindungan hingga ke seluruh dunia serta menawarkan fleksibilitas pada pilihan perlindungan kesehatan Anda*.
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
                    src="https://www.youtube.com/embed/zhq4Q53n7PQ"
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
