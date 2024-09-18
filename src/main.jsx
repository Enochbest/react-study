import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx'
// import './index.css';
// import App from './01.了解JSX.jsx';
import App from './03.通过forwardRef父组件操作子组件dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
