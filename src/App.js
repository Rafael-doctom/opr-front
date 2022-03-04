import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import './global.css';
import store from './store';
import AppRoutes from './routes';

function App() {
  useEffect(() => {
    document.title = "O Povo Requer"
  }, [])

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
