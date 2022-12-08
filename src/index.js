import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage';
import ContentPage from './ContentPage';
import Navbar from './components/Navbar';
import UserPage from './UserPage';
import TodosPage from './TodosPage';
import InfoPage from './InfoPage';
import DetailPage from './DetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='article/:id' element={<ContentPage />} />
        <Route path='todos' element={<TodosPage />} />
        <Route path='todos/detail/:id' element={<DetailPage />} />
        <Route path='users' element={<UserPage />} />
        <Route path='users/info/:id' element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
