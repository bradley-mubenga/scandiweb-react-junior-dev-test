import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

//REACT v18+ Renderer
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);