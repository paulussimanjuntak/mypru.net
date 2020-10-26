import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import { nasabahMenuData } from "data/navbar";

const Customer = () => {
  const router = useRouter()
  return(
    <>
      <section>
        <Container>
          <h3 className="fs-20-s mb-4">Layanan Nasabah</h3>
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {nasabahMenuData.map((data, i) => (
              <Col key={i} className="mt-3">
                <Card className="h-100 product-item hover-pointer" 
                  onClick={data.link ? () => router.push(`/customer/${data.link}`) : () => router.push('http://payment.prudential.co.id/')}
                >
                  <Card.Body className='text-center'>
                    <p className="mb-2">
                      <i className={`fa-2x ${data.icon}`} />
                    </p>
                    <b>{data.label}</b>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style jsx>{`
        :global(.product-item){
          border-radius: 4px;
          background: #fff;
          cursor: pointer;
          box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
          transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        }

        :global(.product-item:hover){
          transform: scale(1.01);
          box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        }
      `}</style>
    </>
  )
}

export default Customer
