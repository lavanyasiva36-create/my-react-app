import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Child from './Child.jsx'
//import Events from './Events.jsx'
//import Counter from './Counter.jsx './StudentDetails.jsx'
import ProductCard from './ProductCard.jsx'
//import Counter from './Counter.jsx'
//import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/*<Child/>*/}
    <ProductCard/>
    {/*<Footer/>*/}
  </StrictMode>,
)
