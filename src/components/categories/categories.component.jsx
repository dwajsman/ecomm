import React from 'react'
import './categories.styles.scss'

export default function categories({category}) {

  return (

      <div className='category-container' >
      <div 
        className='background-image' 
        style={{backgroundImage: `url(${category.imageUrl})`}} 
      />
        {/* <img src={category.imageUrl} alt={category.title} /> */}
        <div className='category-body-container'>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>

  )
}
