import React, { useState, useEffect } from 'react';
import './style.css';
import {data} from './Data';

const ArticleDetails= ({ match }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
        const foundArticle = data.find((article) => article.id === parseInt(match.params.id));
        setArticle(foundArticle);
      }
  , []);

  return (
    <>
      <h1>{article.title}</h1>
      <p>Authors: {article.authors.join(', ')}</p>
      <p>Keywords: {article.keywords.join(', ')}</p>
      <p>{article.body}</p>
    </>
  );
};

export default ArticleDetails;
