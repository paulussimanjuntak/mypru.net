
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const ContacUs = () => {

  return(
    <>
      <section>
        <Container>
          <h3 className="fs-20-s mb-4">Kontak Kami</h3>

          <Row>
            <Col lg={6} md={12}>
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>No. WhatsApp</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Pesan</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Kirim
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ContacUs
