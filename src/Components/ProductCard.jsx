import React from 'react'
import { NavLink } from 'react-router-dom'
import PriceFormate from '../Helper/PriceFormate'

const ProductCard = ({id,image,name,price, category, background}) => {
    return (
       
            <NavLink to={`/singleproduct/${id}`} className='col-lg-4 col-md-12 m-auto  FeatureProducts_col' key={id}>
                <div className="card" style={{background}}>
                    <figure>
                        <img src={image} className="card-img-top" alt={name} />
                        <figcaption>{category}</figcaption>
                    </figure>

                    <div className="card-body">
                        <p className="product_name">{name}</p>
                        <p className="product_price text-secondary ">{<PriceFormate 
                            price={price}
                        />}</p>
                    </div>
                </div>

            </NavLink>
      
       
    )
}

export default ProductCard
