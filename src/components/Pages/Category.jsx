import React from 'react'
import { useState } from 'react'
import { Animator, FadeIn, MoveIn, ScrollContainer, ScrollPage} from "react-scroll-motion"
import Links from './Links'
import "../PagesStyles/Category.scss"

const Category = () => {
  const [search, setSearch] = useState("")
  const [addText, setAddText] = useState("")
  const searchText = (event) => {
    setSearch(event.target.value)
  }
  const handleChange = (e) => {
    setAddText(e.target.value)
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
   const addObject = {
     id: Math.random(),
     title: addText
   }

   Links.push(addObject)
    console.log(Links);
    setAddText("")
  }
  
 
  return (
   
    <div className='category__container'>
      <form onSubmit={handleSubmit}>
        <input type="file"  />
        <input type="text" placeholder='add' value={addText} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    <div className="category__search">
      <h2 style={{paddingBottom: '1rem'}}>Filter By Title</h2>
      <input type="text" placeholder='search' value={search} onChange={searchText} />
    </div>
    <div className='category__flex'>
       {
        Links.filter((val) => {
          if(search === "") {
            return val
          } else if(val.title.toLowerCase().includes(search.toLowerCase())) {
            return val
          }
        }).map((link) => {
          const {id,title, img, text, dir} = link
          return (
            
            <div className='category' key={id}>
              
            <div className="category__img">
              <img src={img} alt="" />
            </div>
            <h2 className='category__title' style={{textAlign: 'center',}}>{title}</h2>
            <div className="category__text">
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

    </div>

  )
}

export default Category