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
    image: "/static/images/benefits/PRUTop1.png",
    description: "Perlindungan kondisi kritis yang komplit, tidak lagi terbatas pada jumlah kondisi kritis yang dilindungi."
  },
  {
    image: "/static/images/benefits/PRUTop2.png",
    description: "Maksimal Uang Pertanggungan per jiwa"
  },
  {
    image: "/static/images/benefits/PRUTop3.png",
    description: "Untuk Asuransi Tambahan ESCC/ESCC Plus yang dibeli bersamaan dengan PRUTOP"
  },
  {
    image: "/static/images/benefits/PRUTop4.png",
    description: "Perlindungan atas kondisi/penyakit kritis termasuk yang BELUM DITEMUKAN"
  },
]

const title = "PRUTotal Critical Protection (PRUTop)"
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
            src="/static/images/banner/prutop-banner.png"
          />
        </Carousel.Item>
      </Carousel>

      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p className="mb-2">
              <strong>Wujudkan hidup bebas khawatir dengan perlindungan total</strong>
            </p>
            <p>
              PRUTotal Critical Protection merupakan Asuransi Tambahan inovatif PERTAMA yang memberikan perlindungan total atas ancaman Kondisi Kritis, termasuk yang belum ditemukan berdasarkan pada perawatan dan tindakan medis yang dilakukan, dan juga ketidakmampuan dalam menjalankan aktivitas. <br /> <br />

              PRUTotal Critical Protection memberikan perlindungan atas risiko terkena penyakit - penyakit baru yang akan muncul di kemudian hari layaknya jaring pengaman serta sebagai perlindungan tambahan atas Asuransi Tambahan Kondisi Kritis yang telah dimiliki saat ini
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
                    src="https://www.youtube.com/embed/xLLvtQQMDww"
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

