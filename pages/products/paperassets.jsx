import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

import style from 'components/Products/detailStyle'

const title = "Paper Asset, Apa Itu Paper Asset ?"

const ProductItem = () => {
  return(
    <>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/static/images/banner/paperassets-banner.png"
          />
        </Carousel.Item>
      </Carousel>

      <section>
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <p>
            Kalau kita bahas tentang aset, Apa yang terpikir pastinya rumah, ruko, tanah, emas dan logam mulia, itu sudah pasti. Semua aset yang itu setiap orang pasti ingin memilikinya. Itu semua termasuk aset riil atau aset nyata.
          </p>
          <p>
            Caranya bagaimana, agar dapat memiliki aset - aset tersebut. Ada yang mendapatkan dari orang tuanya (warisan), ada yang membeli secara Cash (wih orang kaya raya), ada yang mencicil atau kredit ( orang yang bijak). Itu adalah beberapa cara untuk memiliki aset real.
          </p>
          <div className="box-description mb-3">
            <p className="mb-0">
              <b>Paper asset</b> adalah sebuah aset yang berbentuk kertas, bukan kertas sembarang kertas, tetapi ini benar - benar kertas berharga, seperti deposito, saham, reksadana, Polis asuransi, di negara negara maju ini adalah trend.
            </p>
          </div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <img src="/static/images/paperassets1.png" className="w-100 mb-3" />
            </Col>
          </Row>
          <p>
            Cara memiliki nya sangat mudah kita ambil contoh Bapak Beni.<br />
            Ia ingin memiliki Paper Asset seharga 1 Miliar.<br />
            Bapak Beni Cukup membuat polis asuransi<br />
            dengan besar manfaat polis asuransi prusyariah Pak Beni 1 Miliar.<br /><br />

            Di usia dengan usia Bapak Beni saat ini 30 tahun. <br />
            Bapak Beni cukup membayar 892 ribu/bulan atau 10,7 juta/tahun  atau 107 juta selama 10 tahun, untuk membelinya Bapak Beni tidak diminta DP.<br />

          </p>
          <p>
            Bahkan pada saat usia Bapak Beni 55 tahun nilai tunai dari polis asuransi.
          </p>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <img src="/static/images/paperassets2.png" className="w-100 mb-3" />
            </Col>
          </Row>
          <p>
            Bapak Beni baru bayar satu kali, dan meninggal berarti ahli waris atau anak - anak nya
            langsung mendapatkan uang sebesar 1 Milyar dari manfaat polis asuransi prusyariah. <br /> <br />
             
            Dengan Paper asset setiap orang mudah memiliki aset, tanpa banyak memiliki syarat-syarat.
          </p>
        </Container>
      </section>

      <style jsx>{style}</style>
    </>
  )
}

export default ProductItem
