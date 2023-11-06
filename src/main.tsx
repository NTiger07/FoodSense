import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store1, { persistor } from "../src/redux/store"
import { PersistGate } from 'redux-persist/es/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
  <Provider store={store1}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
  </BrowserRouter>
    
  // </React.StrictMode>,
)
