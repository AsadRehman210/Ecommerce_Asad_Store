import React, { useState } from 'react'

const SingleProductImage = ({ imgs = [{url:""}] }) => {
    const [largeImage, setLargeImage] = useState(imgs[0].url)
    return (
        <div className='row single_product_image_row m-auto'>
            <div className='col-lg-3 col-3 m-auto single_product_image_small'>
                {imgs.map((ele) => {
                    return (
                        <figure key={ele.id}>
                            <img src={ele.url} alt={ele.filename} onClick={()=>setLargeImage(ele.url)}/>
                        </figure>
                    )

                })}

            </div>
            <div className='col-lg-9 col-6 m-auto single_product_image_large'>
                <figure>
                <img src={largeImage} alt='Single Product large' />
                </figure>

            </div>
        </div>
    )
}

export default SingleProductImage
