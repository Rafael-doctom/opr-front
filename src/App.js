import React, { useEffect } from 'react';

import './global.css';
import AppProvider from "./contexts";
import AppRoutes from './routes';

function App() {
  useEffect(() => {
    document.title = "O Povo Requer"
  }, [])

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
