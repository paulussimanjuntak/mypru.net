import Link from "next/link";
import Image from "next/image";
import Card from "react-bootstrap/Card";

const ArticleHome = ({ article }) => {
  return (
    <>
      <Card className="mb-4 border-0 shadow-sm border-type-1">
        <div className="promotion-image">
          <Image
            unsized
            quality={60}
            src={article.image}
            alt="MyPru.net | Your Trusted Insurance Planner"
            className="card-img-top img-fit img-article"
          />
        </div>
        <Card.Body className="p-3">
          <Link
            href={`/articles/${article.link}`}
            as={`/articles/${article.link}`}
          >
            <a className="text-decoration-none">
              <Card.Text className="truncate-3 text-dark fs-14-s">
                <strong className="fs-18 fs-16-s d-block">
                  {article.title}
                </strong>
              </Card.Text>
              <p className="truncate-4 text-dark fs-14-s">
                {article.description}
              </p>
            </a>
          </Link>
        </Card.Body>
      </Card>
      <style jsx>{`
        :global(.img-article) {
          height: 180px;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default ArticleHome;
