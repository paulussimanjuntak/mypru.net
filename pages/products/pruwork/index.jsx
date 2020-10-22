import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'antd-button-color'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import style from 'components/Products/detailStyle'

const benefitsData = [
  {
    title: "PRUWorks Life",
    link: "pruworks-life",
    image: "/static/images/benefits/PRUWorks-Life_Landscape-2.jpg",
  },
  {
    title: "PRUWorks Personal Accident",
    link: "pruworks-personal-accident",
    image: "/static/images/benefits/PRUWorks-Personal-Accident_Landscape-2.jpg",
  },
  {
    title: "PRUWorks Medical",
    link: "pruworks-medical",
    image: "/static/images/benefits/PRUWorks-Medical_Landscape-2.jpg",
  },
]

const title = "PRUWorks"

const ProductItem = () => {
  return(
    <>
      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <Row className="justify-content-between mb-5">
            {benefitsData.map((data, i) => (
              <Col key={i} lg={4} md={6} sm={12} className="mb-4">
                <Card className="border-type-1 product-item h-100">
                  <Card.Img variant="top" src={data.image} />
                  <Card.Body className="h-100 pb-0">
                    <Card.Title className="fs-18">{data.title}</Card.Title>
                  </Card.Body>
                  <Card.Footer className="border-0 bg-white pt-0 p-b-20">
                    <Link href={`pruwork/${data.link}`}>
                      <a>
                        <Button ghost type="danger" className="hover-pointer">Selengkapnya</Button>
                      </a>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style jsx>{style}</style>
      <style jsx>{`
        :global(.product-item){
          border-radius: 4px;
          background: #fff;
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

export default ProductItem


