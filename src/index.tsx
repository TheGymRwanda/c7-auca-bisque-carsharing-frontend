import './index.css'

import App from './App'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>,
)
