import { useRouter } from 'next/router'
import { Input, AutoComplete } from 'antd'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import { articleData, autoCompleteArticle } from "data/article";

import CardArticle from "components/Card/Article";
const CardArticleMemo = React.memo(CardArticle);

import CardArticleHorizontal from "components/Card/ArticleHorizontal";
const CardArticleHorizontalMemo  = React.memo(CardArticleHorizontal);

import CardArticleHorizontalSmall from "components/Card/ArticleHorizontalSmall";
const CardArticleHorizontalSmallMemo  = React.memo(CardArticleHorizontalSmall);

const Article = () => {
  const router = useRouter()

  const onSelectAutoComplete = e => {
    router.push(`/articles/${e.toLowerCase().split(' ').join("-")}`)
  }

  return(
    <>
      <Jumbotron className="img-banner-article mb-0">
        <Container>
          <h1 className="title-banner fs-24-s">MyPru Artikel</h1>
          <p className="sub-banner fs-14-s">
            Kumpulan artikel-artikel terbaru tentang ....
          </p>
        </Container>
      </Jumbotron>

      <Container>
        <section className="pb-0">
          <h3 className="mt-2 fs-26-s">Artikel Terbaru</h3>
          <hr />
          <Row>
            {articleData.slice(0, 3).map((data, i) => (
              <Col md={4} sm={6} key={i}>
                <CardArticleMemo article={data} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>

      <Container className="mt-xl-5 mt-lg-2 mt-md-2 mt-sm-2">
        <Row>
          <Col xl={8} className="order-12 order-md-12 order-lg-12 order-xl-1">
            <Row className="mt-2">
              {articleData.reverse().map((data, i) => (
                <Col md={6} lg={12} xl={12} key={i}>
                  <CardArticleHorizontalMemo
                    article={data}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col xl={4} className="order-md-1 order-lg-1 order-xl-1 mb-4 mt-2">
            <AutoComplete
              className="w-100 search-news m-b-18-s d-none d-sm-none d-md-none d-lg-none d-xl-block"
              options={autoCompleteArticle}
              onSelect={onSelectAutoComplete}
              filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            >
              <Input.Search placeholder="Cari artikel" enterButton />
            </AutoComplete>

            <div className="hr-news mb-2 mt-4"></div>
            <h5 className="text-uppercase">Most Popular</h5>
            <ul className="list-unstyled mt-4 mb-5">
              {articleData.reverse().map((data, i) => (
                <CardArticleHorizontalSmallMemo article={data} key={i} />
              ))}
            </ul>

            <AutoComplete
              className="w-100 search-news m-b-18-s d-sm-block d-md-block d-lg-block d-xl-none"
              options={autoCompleteArticle}
              onSelect={onSelectAutoComplete}
              filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            >
              <Input.Search placeholder="Search news" enterButton />
            </AutoComplete>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        :global(.img-banner-article){
          background: url("/static/images/bg-artikel.jpg") no-repeat center center;
          background-size: cover;
          border-radius: 0;
        }
        .title-banner, .sub-banner{
          color: #fff;
        }
        .title-banner{
          font-weight: 700;
          letter-spacing: 2px;
        }
        .sub-banner{
          font-size: 16px;
          font-weight: 500; 
        }
        :global(.hr-news){
          width: 50px;
          border-top: 3px solid rgb(202 31 45);
        }
        :global(.search-news .ant-btn-primary){

          background: #ff4d4f;
          border-color: #ff4d4f;
        }
        :global(.search-news .ant-input-search-enter-button input:hover, .search-news .ant-input-search-enter-button input:focus){
          border-color: rgb(217, 217, 217);
        }
        :global(.ant-input-search .ant-input:hover, .ant-input-search .ant-input:focus){
          border-color: rgb(121, 121, 121);
        }
        :global(.search-news .ant-input-search-enter-button input:hover, 
                .search-news .ant-input-search-enter-button input:focus){
          border-color: #d9d9d9;
        }
        :global(.search-news .ant-input:focus, .search-news .ant-input-focused){
          box-shadow: unset;
        }
      `}</style>
    </>
  )
}

export default Article
