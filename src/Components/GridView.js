import React from 'react'
import ProductCard from './ProductCard'

const GridView = ({productDetail}) => {
  return (
    <>
     {productDetail.map((ele) => {
          return (
            <ProductCard
              key={ele.id}
              id={ele.id}
              image={ele.image}
              name={ele.name}
              price={ele.price}
              category={ele.category}
              background="rgb(240, 232, 232)"
            />
          )
        })}
      
    </>
  )
}

export default GridView
