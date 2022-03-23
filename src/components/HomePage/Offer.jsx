

import React from 'react'
import Offers from './Offers'
import "../PagesStyles/Ofeers.scss"
import { motion } from "framer-motion"

const Offer = () => {
  return (
    <><div className='offer__head'>What we offer you</div>
      <div className='offer__container'>
        
{
    Offers.map((offer) => {
        const {id,icon, title, desc} = offer
          return (
              
              <motion.div  initial={{scale: .9}} animate={{scale: 1}} transition={{duration: 2}} className='offers' key={id}>
                  <div className='icon'>{icon}</div>
                <h2>{title}</h2>
                <p>{desc}</p>
              </motion.div>
          )
      })
}      
      </div>
      </>
  )
}

export default Offer