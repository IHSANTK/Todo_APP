import React from 'react';
import TodoApp from './components/TodoApp/TodoApp';
import About from './components/About/About';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<TodoApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}