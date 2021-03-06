import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'antd-button-color'
import Container from 'react-bootstrap/Container'

import style from 'components/Products/detailStyle'

const title = "PRUCorporate Medical"
const linkWA = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_TELEPON}&text=Hi%2C%20Saya%20ingin%20mengetahui%20lebih%20lanjut%3A%0ANama%3A%20%0AUsia%3A%20%0APekerjaan%3A%20%0APesan%3A%20`

const ProductItem = () => {
  return(
    <>
      <section>
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p>
              Wujudkan kemudahan mendapatkan pelayanan kesehatan untuk karyawan dan keluarganya<br />
              PRUCorporate Medical adalah Perlindungan Asuransi Kesehatan Kumpulan yang memberikan penggantian biaya medis untuk Rawat Inap dengan pilihan manfaat tambahan berupa Persalinan, Rawat Jalan, Perawatan Gigi dan Kacamata*.
            </p>
            <a href={linkWA} target="_blank">
              <Button type="success" className="shadow-none mr-2 mb-2">Info Lebih Lanjut</Button>
            </a>
            <a href="https://www.prudential.co.id/export/sites/prudential-id/id/.galleries/pdf/product/prucorporate-product-summary-medical-agency-190913.pdf" target="_blank">
              <Button type="danger" className="mr-2">Unduh Informasi Produk</Button>
            </a>
            <a href="https://www.prudential.co.id/export/sites/prudential-id/id/.galleries/pdf/product/prucorporate-medical-booklet-medium.pdf" target="_blank">
              <Button type="danger" className="mt-2" ghost>Unduh Brosur</Button>
            </a>
          </div>
        </Container>

        <Container className="mt-5">
          <Row>
            <Col lg={5} md={5} className="mb-3">
              <img src="/static/images/benefits/PRUCorporate-Medical-landscape.jpg" className="w-100 h-100 img-fit" />
            </Col>
            <Col lg={7} md={7} className="mb-3">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1NMAJt3hJ7Q" allowFullScreen />
              </div>
            </Col>
          </Row>
        </Container>

      </section>

      <style jsx>{style}</style>
    </>
  )
}

export default ProductItem
