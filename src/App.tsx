import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {ArticlePage} from "./pages/ArticlePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
