import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '50vh',
      }}>
      <div style={{ fontSize: '30px', marginBottom: '20px' }}>Такой страницы не существует 🫤</div>
      <Link
        style={{ color: 'white', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold ' }}
        to={'/'}>
        Вернуться на главную
      </Link>
    </div>
  );
};
