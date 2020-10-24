import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const Company = () => {
  return(
    <>
      <section>
        <Container>
          <Card.Body className="p-5">
            <Row className="">
              <Col sm={12} md={6}>
                <img src="/static/images/about-company.jpg" className="w-100 bor-rad-10px mb-4" />
              </Col>
              <Col sm={12} md={6}>
                <h3 className="fs-20-s mb-4">Prudential Indonesia</h3>
                <p className="text-justify fs-16 mb-0">
                  Didirikan pada tahun 1995, PT Prudential Life Assurance (Prudential Indonesia) merupakan bagian dari Prudential plc, sebuah grup perusahaan jasa keuangan terkemuka di Inggris. Sebagai bagian dari Grup yang berpengalaman lebih dari 172 tahun di industri asuransi jiwa, Prudential Indonesia memiliki komitmen untuk mengembangkan bisnisnya di Indonesia. <br /> <br />
                  Sejak peluncuran produk asuransi terkait investasi (unit link) pertamanya di tahun 1999, Prudential Indonesia telah menjadi pemimpin pasar untuk kategori produk tersebut di Indonesia. Prudential Indonesia menyediakan berbagai produk dan layanan yang dirancang untuk memenuhi dan melengkapi setiap kebutuhan keuangan para nasabahnya di Indonesia. Prudential Indonesia juga telah mendirikan unit bisnis Syariah sejak tahun 2007 dan dipercaya sebagai pemimpin pasar asuransi jiwa syariah di Indonesia sejak pendiriannya. <br /> <br />
                  Beberapa pencapaian bisnis kunci sampai 31 Desember 2019:<br />
                  Total aset: <b>Rp 80,7 triliun</b><br /> 
                  Total dana kelolaan: <b>Rp 74,5 triliun</b><br />
                  Total klaim dibayarkan: <b>Rp 15,6 triliun</b><br />
                  Risk-Based Capital (RBC): <b>678%</b>. Di atas ketentuan Pemerintah sebesar <b>120%</b><br />
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </section>
    </>
  )
}

export default Company
