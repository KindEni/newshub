import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

const ArticleBox = styled.div`
  display: grid;
  grid-template-columns: 
`;

const ArticleItem = styled.div`
  text-align: left;
  padding: 1%;
  background: lightGray;
  border-radius: 5px;
  margin-bottom: 2%;
`;

export default function NewsBox() {
  const [loading, setLoading] = useState(true);
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=1ae085dfcaed4dd49425965d50708302"
      );

      if (results) {
        setLoading(false);
        setArticles(results.data.articles);
      }
    }
    console.log(Articles);
    fetchData();
  }, [loading]);

  return (
    <>
      {loading ? (
        <span>loading...</span>
      ) : (
        <ArticleBox>
          {Articles.filter((article) =>
            article.author ? article.author : null
          ).map((article) => (
            <ArticleItem key={Articles.indexOf(article)}>
              {article.author}
            </ArticleItem>
          ))}
        </ArticleBox>
      )}
    </>
  );
}
