import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx'
// import './index.css';
// import App from './01.了解JSX.jsx';
import App from './09.条件渲染.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
