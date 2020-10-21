import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import { productsData } from 'data/product'

const Product = () => {
  return(
    <>
      <Jumbotron className="img-banner-article mb-0">
        <Container>
          <h1 className="title-banner fs-24-s">Produk Kami</h1>
          <p className="sub-banner fs-14-s text-wrap">
            Kami hadir untuk memenuhi kebutuhan perlindungan diri Anda dan orang-orang yang Anda cintai
          </p>
        </Container>
      </Jumbotron>

      {productsData.map((data, i) => (
        <section key={i} className="product-section">
          <Container className="product-container">
            <Row>
              <Col md={4} lg={4}>
                <div className="title-group-product-sticky">
                  <h3 className="fs-20-s title-group-product">{data.title}</h3>
                </div>
              </Col>
              <Col md={8} lg={8}>
                <div dangerouslySetInnerHTML={{__html: data.description}} />
                <Row>
                  {data.products && data.products.length > 0 && data.products.map((product, i) => (
                    <Col key={i} className="product-col mt-md-0 col-sm-6 col-xs-12">
                      <Card className="border-type-1 shadow-sm">
                        <Card.Body>
                          {product.label}
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
          background: url("/static/images/products-banner.jpg") no-repeat center center;
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
          color: #111;
        }
        .title-banner{
          font-weight: 700;
          letter-spacing: 2px;
        }
        .sub-banner{
          color: #222;
          font-size: 16px;
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

        :global(.product-col:last-of-type){
          // margin-top: 1rem;
        }

        @media only screen and (max-width: 767px) {
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
