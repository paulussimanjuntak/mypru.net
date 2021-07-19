import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import { productsData } from 'data/product'

const Product = () => {
  const router = useRouter()

  return(
    <>
      <Jumbotron className="img-banner-article mb-0">
        <Container>
          <h1 className="title-banner fs-30-s">Taukah Anda?</h1>
          <p className="sub-banner fs-18-s text-wrap">
            Rata-rata kenaikan
            <span className="text-danger-2 fw-500"> biaya kesehatan </span>
            tahun 2019 sebesar ±<span className="text-danger-2 font-weight-bold fs-20"> 11%</span>.
          </p>
        </Container>
      </Jumbotron>

      {productsData.map((data, i) => (
        <section key={i} className="product-section">
          <Container className="product-container">
            <Row>
              <Col md={4} lg={4}>
                <div className="title-group-product-sticky">
                  <h3 className="fs-22-s title-group-product">{data.title}</h3>
                </div>
              </Col>
              <Col md={8} lg={8}>
                <div dangerouslySetInnerHTML={{__html: data.description}} />
                <Row>
                  {data.products && data.products.length > 0 && data.products.map((product, i) => (
                    <Col key={i} sm={12} md={12} lg={6} className="product-col mt-lg-0 mb-3">
                      <Card className="h-100 product-item hover-pointer" onClick={() => router.push(`/products/${product.link}`)}>
                        <Card.Body>
                          <Media className="align-items-center h-100">
                            <p className="align-self-center mr-3 mb-0">
                              <i className={`fa-2x ${product.icon}`} />
                            </p>
                            <Media.Body>
                              <p className="align-self-center mb-0">
                                {product.label}
                              </p>
                            </Media.Body>
                          </Media>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      ))}
      <style jsx>{`
        :global(.img-banner-article){
          background: url("/static/images/banner/Banner-Doctors.png") no-repeat center center;
          background-size: cover;
          border-radius: 0;
          padding: 8rem 2rem;
        }
        .product-section:not(:last-of-type){
          padding-top: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid #efefef;
        }
        .title-banner{
          color: #cf1322;
          font-weight: 700;
          letter-spacing: 2px;
        }
        .sub-banner{
          color: #222;
          font-size: 20px;
          font-weight: 500; 
          text-shadow: 0px 0px 5px rgba(255, 255, 255, 1);
        }

        .title-group-product-sticky{
          position: sticky;
          top: 5rem;
        }
        .title-group-product{
          font-size: 24px;
          color: #262626;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .title-group-product:after{
          position: absolute;
          bottom: -14px;
          left: 0;
          width: 72px;
          height: 2px;
          content: "";
          background: #ddd;
        }

        .description-group-product{
          white-space: pre-line;
        }

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

        :global(.product-col:last-of-type){
          margin-top: 1rem;
        }

        @media only screen and (max-width: 425px) {
        }

        @media only screen and (max-width: 767px) {
          :global(.img-banner-article){
            padding: 4rem 2rem;
          }
          .title-group-product-sticky{
            top: 0;
          }
        }
      `}
      </style>
    </>
  )
}

export default Product
