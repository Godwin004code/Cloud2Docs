

import React from 'react'
import Offer from "./Offer";
import Support from './Support';
import "./Homecontents.scss"
import Javascript from '../Pages/Link';
import Footer from '../Pages/Footer';


const HomeFlex = () => {
  return (
    <div className='home__flex'>
         <div>
         <Offer />
         <Javascript />
         <Support />
         <Footer />
         </div>
         
    </div>
  )
}

export default HomeFlex