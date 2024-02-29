import React from 'react'
// import card1 from "../images/image7.webp"
import { useAuth } from '../Context/store';
import ProductCard from './ProductCard';

const FeatureProducts = () => {
    const { isLoading, FeatureProducts } = useAuth();
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <section className='FeatureProducts_section'>
            <div className='container'>
                <p className='feature_smallHeading'>Click Now</p>
                <h2 className='feature_mainHeading'>Our Feature Services</h2>
                <div className='row FeatureProducts_row '>
                    {FeatureProducts.map((ele) => {
                        return (
                            <ProductCard
                            key={ele.id}
                            id={ele.id}
                            image={ele.image}
                            name={ele.name}
                            price={ele.price}
                            category={ele.category}
                            />
                        )
                    })}


                </div>
            </div>
        </section>
    )
}

export default FeatureProducts
