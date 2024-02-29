import React, { useEffect } from 'react'
import { useAuth } from '../Context/store';
import { NavLink, useParams } from 'react-router-dom';
import PriceFormate from "../Helper/PriceFormate";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import SingleProductImage from '../Components/SingleProductImage';
import Stars from '../Components/Stars';
import ColorBtn from '../Components/ColorBtn';






const SingleProduct = () => {
  const { id } = useParams();
  const { singleProduct, isSingleProductLoading, SinglePdroduct } = useAuth();
  


  useEffect(() => {
    singleProduct(`https://api.pujakaitem.com/api/products?id=${id}`)
  }, [id]);

  if (isSingleProductLoading) {
    return <div>Loading ...</div>
  }
  const { id: ID, name, company, price, description, stock, reviews, stars, image } = SinglePdroduct;

  return (
    <main className='singleProduct_section'>
      <div className='mainHeading_div'>
        <div className='container'>
          <div className='Main_Heading'>
            <NavLink to="/">Home</NavLink> / {name}
          </div>
        </div>
      </div>
      <div className='container'>

        <div className='row single_Product_row gx-3'>
          <div className='col-lg-6 col-8 m-auto single_Product_ImagePortion'>
            <SingleProductImage
              imgs={image} />

          </div>
          <div className='col-lg-6 col-8 m-auto single_Product_content'>
            <h3>{name}</h3>
            <Stars star={stars} review={reviews}/>
            <p className='previous_price'>MRP :
              <strong>
                <del> <PriceFormate price={price + 25000} /> </del>
              </strong>
            </p>
            <p className='current_price'>Deal of the Day : <PriceFormate price={price} /> </p>
            <p className='single_description'>{description}</p>

            <div className='company_services'>
              <div className='services'>
                <div className='service_img'>
                  <TbTruckDelivery />
                </div>

                <p>Free Delivery</p>

              </div>
              <div className='services'>
                <div className='service_img'>
                  <TbReplace />
                </div>

                <p>30 Days Replacement</p>

              </div>
              <div className='services'>
                <div className='service_img'>
                  <TbTruckDelivery />
                </div>

                <p>Delivery within 7 Days</p>

              </div>
              <div className='services'>
                <div className='service_img'>
                  <MdOutlineSecurity />
                </div>

                <p>2 Year Warranty</p>

              </div>


            </div>

            <p className='single_para mt-4'>Available : <strong className='text-black'>{stock > 0 ? "In Stock" : "Not Available"}</strong></p>
            <p className='single_para'>ID : <strong className='text-black'>{ID}</strong></p>
            <p className='single_para'>Brand : <strong className='text-black'>{company}</strong></p>

            <hr />

            <ColorBtn 
            productDetail={SinglePdroduct} />

          </div>
        </div>
      </div>

    </main>
  )
}

export default SingleProduct
