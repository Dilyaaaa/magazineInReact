import React, { useState, useEffect } from 'react';
import './style.css';
import {data} from './Data';
const SearchAndListPage = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('title');

  useEffect(() => {
   setArticles(data);
   
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortField(event.target.value);
  };

  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.keywords.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const sortedArticles = filteredArticles.sort((a, b) => {
    if (sortField === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortField === 'author') {
      return a.authors[0].localeCompare(b.authors[0]);
    } else {
      return a.keywords[0].localeCompare(b.keywords[0]);
    }
  });

  return (
    <>
      <h1>Journal Articles</h1>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by title, author, or keywords" />
      <select value={sortField} onChange={handleSortChange}>
        <option value="title">Sort by Title</option>
        <option value="author">Sort by Author</option>
        <option value="keyword">Sort by Keyword</option>
      </select>
      <ul>
        {sortedArticles.map((article) => (
          <li key={article.id}>
            <a href={`article/${article.id}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchAndListPage;
