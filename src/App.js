import React, { useEffect } from 'react';

import './global.css';

import AppRoutes from './routes';

function App() {
  useEffect(() => {
    document.title = "O Povo Requer"
  }, [])

  return (
    <AppRoutes />
  );
}

export default App;
