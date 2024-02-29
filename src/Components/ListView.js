import React from 'react'
import { NavLink } from 'react-router-dom'
import PriceFormate from '../Helper/PriceFormate'

const ListView = ({ productDetail }) => {
    return (
        <div className='col-12 listView_section gy-5'>
            {productDetail.map((ele, index) => {
                return (
                    <div className='row listView_row' key={ele.id}>

                        <div className='col-6 listView_images '>
                            <div className='view_img'>
                                <img src={ele.image} alt='listpic' />
                            </div>
                        </div>

                        <div className='col-6 listView_content '>
                            <h3>{ele.name}</h3>
                            <p className='listView_price'>
                            <PriceFormate price={ele.price} /></p>
                            <p className='listView_description'>
                                {ele.description.slice(0,120)} <strong>...</strong>
                            </p>

                            <NavLink to={`/singleproduct/${ele.id}`} >
                                <button className="btn btn-outline-primary">Read More</button></NavLink>

                        </div>
                    </div>

                )
            })}


        </div>
    )
}

export default ListView
