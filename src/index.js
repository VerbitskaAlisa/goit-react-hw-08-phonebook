import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import  App  from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
        </BrowserRouter>
        </PersistGate>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
