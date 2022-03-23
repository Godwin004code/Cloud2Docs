import React from 'react'
import Links from './Links'
import "../PagesStyles/Links.scss"

const Javascript = () => {
  const temp = Links.slice(0,4)
  return (
    <>
    <h2 classname="link__head" style={{textAlign: 'center'}}>Have a sneak peak of what we offer</h2>
    <div className='link__container'>
      
      {
        temp.map((link) => {
          const {id,title, img, text, dir} = link
          return (
            <div className='link' key={id}>
              
            <div className="img">
              <img src={img} alt="" />
            </div>
            <h2 style={{padding: '1.5rem 0', textAlign: 'center'}}>{title}</h2>
            <div className="text">
              <p>{text}</p>
            </div>
            <button className='read'>
              <a href={dir}>Read more here</a>
            </button>

            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Javascript