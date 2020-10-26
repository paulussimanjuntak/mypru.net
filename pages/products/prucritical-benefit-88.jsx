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
    image: "/static/images/benefits/88.png",
    description: "Perlindungan Jangka Panjang"
  },
  {
    image: "/static/images/benefits/60.png",
    description: "Perlindungan Kondisi Kritis yang Komprehensif atau Meninggal Dunia"
  },
  {
    image: "/static/images/benefits/Manfaat-Jatuh-Tempo.png",
    description: "Manfaat Jatuh Tempo *) jika Tertanggung masih hidup dan Polis tetap aktif"
  },
  {
    image: "/static/images/benefits/Manfaat-Meninggal-Dunia.png",
    description: "Manfaat Meninggal Dunia karena Kecelakaan sebelum usia 70 tahun"
  },
]

const title = "PRUCritical Benefit 88"
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
            src="/static/images/banner/pcb88-banner.png"
          />
        </Carousel.Item>
      </Carousel>

      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p className="mb-2">
              <strong>Proteksi Terjamin, Uang Pasti Kembali</strong>
            </p>
              PRUCritical Benefit 88 merupakan produk asuransi jiwa tradisional yang memberikan perlindungan komprehensif atas risiko Kondisi Kritis atau meninggal dunia sampai dengan Tertanggung berusia 88 tahun dengan beragam pilihan masa pembayaran Premi hingga 15 tahun. PRUCritical Benefit 88 adalah solusi Anda untuk proteksi yang terjamin dan solusi rencana masa depan Anda. <br /> <br />

            <p className="mb-2">
              <strong>Proteksi Terjamin</strong>
            </p>
            PRUCritical Benefit 88 memberikan perlindungan berupa 100% Uang Pertanggungan (UP) jika Tertanggung mengalami salah satu dari 60 Kondisi Kritis tahap akhir atau meninggal dunia dan Polis akan berakhir. PRUCritical Benefit 88 juga memberikan perlindungan atas pelaksanaan perawatan Angioplasti sebesar 10% UP tanpa mengurangi UP PRUCritical Benefit 88. Manfaat Asuransi yang dibayarkan akan mengikuti ketentuan Polis PRUCritical Benefit 88. <br /> <br />

            <p className="mb-2">
              <strong>Uang Pasti Kembali</strong>
            </p>
            <p>
              Pembayaran 100% UP pada usia 88 tahun apabila Tertanggung masih hidup dan Polis tetap aktif.
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
                    src="https://www.youtube.com/embed/omAGeYdAf-0"
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

