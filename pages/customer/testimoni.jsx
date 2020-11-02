import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const TestiClaim = () => {
  return (
    <>
      <section className="pt-4">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h3 className="fs-20-s text-center mb-4">Testimoni Klaim</h3>
              <div>
                <p>
                  <img src="/static/images/testi-klaim/1.jpeg" className="w-100 mb-3 bor-rad-10px shadow" />
                </p>
                <p>
                  <img src="/static/images/testi-klaim/2.jpeg" className="w-100 mb-3 bor-rad-10px shadow" />
                </p>
                <div className="embed-responsive embed-responsive-16by9 bor-rad-10px shadow">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/L6_xAy5P4kI"
                    allowFullScreen
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TestiClaim;
