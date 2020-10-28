import Link from 'next/link'
import Media from 'react-bootstrap/Media'

const ArticleHorizontalSmall = ({ article }) => {
  return(
    <>
      <Link href={`/articles/${article.link}`}>
        <a className="text-reset">
          <Media as="li" className="border shadow mb-2">
            <Media.Body className="p-4">
              <h5 className="card-title fs-12 mb-0 mt-2-s truncate-2">{article.title}</h5>
            </Media.Body>
            <img
              width={64}
              height={64}
              src={article.image} 
              className="align-self-center m-2 img-fit"
              alt="MyPru.net | Your Trusted Insurance Planner"
            />
          </Media>
        </a>
      </Link>
    </>
  )
}

export default ArticleHorizontalSmall
