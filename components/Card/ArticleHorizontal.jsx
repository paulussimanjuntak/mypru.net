import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ArticleHorizontal = ({ article }) => {
  return (
    <>
      <Card className="border-left-0 border-right-0 rounded-0 border-bottom-0 shadow-none mb-3">
        <Row>
          <Col
            lg={6}
            xl={8}
            className="order-12 order-md-12 order-lg-1 order-xl-1"
          >
            <Card.Body className="mt-2-s pl-0-s px-0">
              <Link href={`/articles/${article.link}`}>
                <a className="text-reset">
                  <h5 className="card-title mb-2 truncate-2">
                    {article.title}
                  </h5>
                </a>
              </Link>
              <p className="card-text fs-14 text-justify font-weight-light truncate-4">
                {article.description}
              </p>
            </Card.Body>
          </Col>

          <Col
            lg={6}
            xl={4}
            className="order-1 order-md-1 order-lg-12 order-xl-12"
          >
            <img
              src={article.image}
              className="card-img img-article-horizontal rounded-0"
              alt="MyPru.net | Your Trusted Insurance Planner"
            />
          </Col>
        </Row>
      </Card>
      <style jsx>{`
        .img-article-horizontal {
          height: 160px;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default ArticleHorizontal;
