import React from "react";
import { Link, graphql, navigate } from "gatsby";
import { Row, Col, Card, Table } from "react-bootstrap";
import SEO from "../components/seo";
import Layout from "../components/layout";
import homeImg from "../images/home.png";
import "../style/layout.scss";

const IndexPage = ({ data }) => {
  const handleCategoryClick = category => {
    // Navigate to the Information page with the selected category parameter
    navigate("/information", {
      state: { category: category },
    });
  };

  const articlesPerRow = 2;

  const createArticleCards = (articles, category) => {
    const articleCards = [];

    for (let i = 0; i < articles.length; i += articlesPerRow) {
      const row = articles.slice(i, i + articlesPerRow).map(({ node }) => (
        <Col key={node.id} md={6}>
          <Card style={{ marginBottom: "1rem" }}>
            <Link to={`/information/${category}/${node.id}`}>
              <Card.Img
                variant="top"
                src={node.image.url}
                className="index-category-img"
              />
              <Card.Body>
                <Card.Title className="index-category-title">
                  {node.title}
                </Card.Title>
                <Link
                  to={`/information/${category}/${node.id}`}
                  className="btn btn-primary back-link-design"
                >
                  記事を読む
                </Link>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      ));

      articleCards.push(
        <Row key={i} style={{ justifyContent: "space-between" }}>
          {row}
        </Row>
      );
    }

    articleCards.push(
      <Row key="view-more">
        <button
          className="btn-view-more"
          onClick={() => handleCategoryClick(category)}
        >
          もっと見る &gt;&gt;&gt;
        </button>
      </Row>
    );

    return articleCards;
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Table style={{ paddingTop: "3%" }}>
        <tbody className="index-table-body">
          <tr>
            <img src={homeImg} className="home-img" alt="Home" />
          </tr>
          <tr className="index-category borderStyle">
            <td>
              <button
                className="index-category-btn"
                onClick={() => handleCategoryClick("IOT")}
              >
                IOT
              </button>
            </td>
          </tr>
          <tr className="borderStyle">
            <td colSpan="2">{createArticleCards(data.iot.edges, "IOT")}</td>
          </tr>
          <tr className="index-category borderStyle">
            <td>
              <button
                className="index-category-btn"
                onClick={() => handleCategoryClick("WEB")}
              >
                WEB
              </button>
            </td>
          </tr>
          <tr className="borderStyle">
            <td colSpan="2">{createArticleCards(data.web.edges, "WEB")}</td>
          </tr>
          <tr className="index-category borderStyle">
            <td>
              <button
                className="index-category-btn"
                onClick={() => handleCategoryClick("AI")}
              >
                AI
              </button>
            </td>
          </tr>
          <tr className="borderStyle">
            <td colSpan="2">{createArticleCards(data.ai.edges, "AI")}</td>
          </tr>
          {/* <tr>
            <td colSpan="2">
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-1134938100904308"
                data-ad-slot="2867513240"
                data-ad-format="auto"
                data-full-width-responsive="true"
                //adTest='on'
              ></ins>
              <script>
                {`(adsbygoogle = window.adsbygoogle || []).push({});`}
              </script>
            </td>
          </tr> */}
        </tbody>
      </Table>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    iot: allMicrocmsInformation(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { category: { category: { eq: "IOT" } } }
    ) {
      edges {
        node {
          id
          date
          title
          category {
            category
          }
          image {
            url
            height
            width
          }
        }
      }
    }
    ai: allMicrocmsInformation(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { category: { category: { eq: "AI" } } }
    ) {
      edges {
        node {
          id
          date
          title
          category {
            category
          }
          image {
            url
            height
            width
          }
        }
      }
    }
    web: allMicrocmsInformation(
      limit: 4
      sort: { fields: date, order: DESC }
      filter: { category: { category: { eq: "WEB" } } }
    ) {
      edges {
        node {
          id
          date
          title
          category {
            category
          }
          image {
            url
            height
            width
          }
        }
      }
    }
  }
`;
