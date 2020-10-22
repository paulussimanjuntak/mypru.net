import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
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

const ProductItem = () => {
  return(
    <>
      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p className="mb-2">
              <strong>Wujudkan hidup bebas khawatir dengan perlindungan total</strong>
            </p>
              PRUTotal Critical Protection merupakan Asuransi Tambahan inovatif PERTAMA yang memberikan perlindungan total atas ancaman Kondisi Kritis, termasuk yang belum ditemukan berdasarkan pada perawatan dan tindakan medis yang dilakukan, dan juga ketidakmampuan dalam menjalankan aktivitas. <br /> <br />

              PRUTotal Critical Protection memberikan perlindungan atas risiko terkena penyakit - penyakit baru yang akan muncul di kemudian hari layaknya jaring pengaman serta sebagai perlindungan tambahan atas Asuransi Tambahan Kondisi Kritis yang telah dimiliki saat ini
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

      <style jsx>{style}</style>
    </>
  )
}

export default ProductItem

