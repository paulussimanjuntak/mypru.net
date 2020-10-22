import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'antd-button-color'
import Container from 'react-bootstrap/Container'

import style from 'components/Products/detailStyle'

const title = "PRUCorporate Personal Accident"

const ProductItem = () => {
  return(
    <>
      <section>
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p>
              Wujudkan kemudahan dalam memberikan ketenangan dalam bekerja bagi karyawan Anda dengan perlindungan kecelakaan diri<br />
              PRUCorporate Personal Accident adalah Asuransi Kecelakaan Diri  Kumpulan yang memberikan perlindungan atas risiko Meninggal Dunia akibat Kecelakaan dengan pilihan manfaat tambahan berupa Cacat Tetap Akibat Kecelakaan Akselerasi dan Penggantian Biaya Medis Akibat Kecelakaan.
            </p>
            <a href="https://www.prudential.co.id/export/sites/prudential-id/.galleries/PDF/Products/Product-Summary-PRUcorporate-personal-accident-agency_190913_FA.PDF" target="_blank">
              <Button type="danger" className="mr-2">Unduh Informasi Produk</Button>
            </a>
            <a href="https://www.prudential.co.id/export/sites/prudential-id/.galleries/PDF/Products/FA_Pru_Corporate_Personal_Accident_Booklet_13x21_2019_Medium.pdf" target="_blank">
              <Button type="danger" className="mt-2" ghost>Unduh Brosur</Button>
            </a>
          </div>
        </Container>

        <Container className="mt-5">
          <Row>
            <Col lg={5} md={5} className="mb-3">
              <img src="/static/images/benefits/PRUCorporate-Persoanl-Accident-landscape.jpg" className="w-100 h-100 img-fit" />
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
