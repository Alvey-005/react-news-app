import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './pages/layout.jsx'
import { store } from './store';
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import  palette  from "./theme/pallete";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme({ palette })}>
      <Provider store={store}>
        <Layout>
          <App />
        </Layout>
      </Provider>
    </ThemeProvider>


  </React.StrictMode>,
)
