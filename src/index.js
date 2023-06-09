import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { AppProvider } from './Components/context/productcontext';
import { FilterContextProvider } from './Components/context/filter_context';
import { CartProvider } from './Components/context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  
  
  
  
  <AppProvider >
  
  <Provider store={store}>
  <FilterContextProvider>
  
  
  <CartProvider>
  <BrowserRouter>
      <App />
      
      </BrowserRouter>
      </CartProvider>
    
   
    </FilterContextProvider>
    </Provider>
    </AppProvider>
    
    
   
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
