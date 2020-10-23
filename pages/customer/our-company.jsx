import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Company = () => {
  return(
    <>
      <Container>
        <section className="p-t-0-s p-t-60-m p-t-60-t">
          <h3 className="fs-20-s mb-4">Tentang Prudential Indonesia</h3>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <h4 className="fs-20-s text-capitalize">
                Asuransi kesehatan yang memberikan perlindungan komplit dan fleksibel
              </h4>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/zhq4Q53n7PQ"
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  )
}

export default Company
