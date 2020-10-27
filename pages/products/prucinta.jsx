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
    image: "/static/images/benefits/PRUCinta1.png",
    description: "Manfaat Meninggal Dunia atas diri Peserta Yang Diasuransikan sesuai dengan yang tercantum di dalam Polis"
  },
  {
    image: "/static/images/benefits/PRUCinta2.png",
    description: "Manfaat Jatuh Tempo dalam bentuk Nilai Tunai atas beban Dana Nilai Tunai pada saat Polis masih aktif diakhir masa kepesertaan"
  },
  {
    image: "/static/images/benefits/PRUCinta3.png",
    description: "Masa Kepesertaan dapat diperpanjang tanpa pemeriksaan kesehatan sesuai Ketentuan pada Polis"
  },
  {
    image: "/static/images/benefits/PRUCinta4.png",
    description: "Manfaat Meninggal Dunia karena Kecelakaan sebelum usia 70 tahun dalam periode 6 (enam) minggu sejak tanggal 1 (satu) Ramahan yang ditetapkan oleh Pemerintah Republik Indonesia mengikuti ketentuan dalam Polis"
  },
]

const title = "Asuransi Jiwa Syariah PRUCinta"
const linkWA = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_TELEPON}&text=Nama%3A%20%0AUmur%3A%0APekerjaan%3A.`

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
            src="/static/images/banner/prucinta-banner.png"
          />
        </Carousel.Item>
      </Carousel>

      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p className="mb-2">
              <strong>Buktikan Cintamu</strong>
            </p>
            <p>
              PRUCinta merupakan produk asuransi jiwa syariah tradisional yang menyediakan perlindungan komprehensif selama 20 tahun masa kepesertaan terhadap risiko meninggal dunia dan meninggal dunia karena kecelakaan. <br /> <br />

              Selain memberikan perlindungan selama 20 tahun, produk ini juga dapat diperpanjang masa kepesertaannya dengan tanpa pemeriksaan kesehatan dan manfaat jatuh tempo dalam bentuk Nilai Tunai atas beban Dana Nilai Tunai di akhir masa kepesertaan, dan manfaat lainnya termasuk perlindungan terhadap risiko meninggal dunia karena kecelakaan selama periode Mudik atau Balik Lebaran. Detail ketentuan mengenai perpanjangan masa kepesertaan dapat dilihat pada Polis.
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
                    src="https://www.youtube.com/embed/H1FviFcCGJY"
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
