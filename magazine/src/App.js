import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArticleDetails from './pages/ArticleDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAndListPage from './pages/SearchAndListPage';

function App() {


  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchAndListPage />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
  );
}


export default App ;
