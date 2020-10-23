import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'antd-button-color'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const Career = () => {
  return(
    <>
      <section>
        <Container>
          <Card.Body className="p-0">
            <Row>
              <Col sm={12} md={12} lg={6} className="order-12 order-md-12 order-lg-1 order-xl-1">
                <h1 className="fs-24-s mb-4 ">Bergabung Di Bisnis Asuransi Prudential</h1>
                <p className="text-justify fs-16 mb-0">
                  Profesi Agen Asuransi merupakan salah satu profesi yang menjanjikan masa depan yang baik, apabila profesi ini dijalani dengan komitmen, kesungguhan, dan mindset yang tepat. Pertumbuhan karir juga menjadi salah satu yang bisa anda dapatkan di Industri Bisnis Asuransi Prudential. <br /> <br />
                  Industri Asuransi Prudential juga merupakan salah satu industri yang unik, karena tidak banyak industri yang ketika anda memulai menjalaninya, itu juga berarti anda memiliki sebuah BISNIS baru yang merupakan milik anda sendiri. Yang mana anda memiliki akses produk yang bermanfaat, dan anda mendapatkan kebebasan untuk berkreasi sendiri untuk menjual produk asuransi dengan cara yang menurut anda terbaik.
                  <br /> <br />
                  <a href="https://api.whatsapp.com/send?phone=6281423763267&text=Nama%3A%20%0AUmur%3A%20" target="_blank">
                    <Button
                      type="success"
                      size="large"
                      shape="round"
                      className="shadow-none mb-3"
                    >
                      Info Lebih Lanjut
                    </Button>
                  </a>
                </p>
              </Col>
              <Col sm={12} md={12} lg={6} className="order-1 order-md-1 order-lg-12 order-xl-12">
                <img src="/static/images/career.jpg" className="w-100 bor-rad-10px mb-4" />
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </section>

      <section style={{ backgroundColor: "#fff1f0" }}>
        <Container>
          <h2 className="fs-24-s mb-4 text-danger-2 text-center font-weight-bold">KENAPA PRUDENTIAL?</h2>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <h4 className="fs-16-s mb-2 text-danger">1. KOMPENSASI</h4>
              <img src="/static/images/kompensasi.png" className="w-100 bor-rad-10px mb-4" />
            </Col>
            <Col lg={6} md={12} sm={12}>
              <h4 className="fs-16-s mb-2 text-danger">2. JENJANG KARIR</h4>
              <img src="/static/images/jenjang-karir.jpg" className="w-100 bor-rad-10px mb-4" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="fs-24-s mb-4 text-danger-2 text-center font-weight-bold">Reward Trip</h2>
          <Row>
            <Col lg={4} md={12} sm={12}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  allowFullScreen
                  className="embed-responsive-item bor-rad-10px"
                  src="https://www.youtube.com/embed/7NW3coTAviM"
                />
              </div>
              <p className="fs-16 text-center mt-2 mb-4 mb-lg-3">Seoul Trip</p>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  allowFullScreen
                  className="embed-responsive-item bor-rad-10px"
                  src="https://www.youtube.com/embed/FWVxl8RSCqc"
                />
              </div>
              <p className="fs-16 text-center mt-2 mb-4 mb-lg-3">London Trip</p>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  allowFullScreen
                  className="embed-responsive-item bor-rad-10px"
                  src="https://www.youtube.com/embed/Nyq2ud_nfLY"
                />
              </div>
              <p className="fs-16 text-center mt-2 mb-4 mb-lg-3">Trip Edinburgh</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container className="about-section">
          <Card.Body className="px-lg-5 pt-lg-5 px-md-3 pt-md-3 pb-4">
            <h2 className="fs-24-s mb-4 text-center font-weight-bold">Kisah Sukses</h2>
            <Row className="align-items-center">
              <Col sm={12} md={12} lg={6} className="mb-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    allowFullScreen
                    className="embed-responsive-item bor-rad-10px"
                    src="https://www.youtube.com/embed/svJCrcFMDXM"
                  />
                </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="mb-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    allowFullScreen
                    className="embed-responsive-item bor-rad-10px"
                    src="https://www.youtube.com/embed/Gt7-_0KARu8"
                  />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </section>

      <style jsx>{`
        :global(.about-section){
          border-radius: 10px;
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  )
}

export default Career
