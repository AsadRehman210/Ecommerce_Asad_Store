import React from 'react'
import PriceFormate from "../Helper/PriceFormate"
import { useCart } from '../Context/CartContext';
import CartNumber from '../Components/CartNumber';
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';



const Cart = () => {
    const { cart, RemoveCart, ClearCart, setDecrement, setIncrement, total_Price,  shipping_fee} = useCart();
    if(cart.length === 0){
        return <div className='cart_legth_zero'>No Item In Cart
        <NavLink to="/products" className="btn btn-primary">Go for Shopping</NavLink></div>
    }


    return (
        <main className='cart_section'>
            <div className='container'>
                <div className='row cart_row'>
                    <div className='col-12 cart_col_content'>
                        <table style={{ width: "100%" }} >
                            <thead>
                                <tr>
                                    <th className='text-center' style={{ width: "20%" }}>Item</th>
                                    <th className='text-center' style={{ width: "20%" }}>Price</th>
                                    <th className='text-center' style={{ width: "20%" }}>Quantity</th>
                                    <th className='text-center' style={{ width: "20%" }}>Subtotal</th>
                                    <th className='text-center' style={{ width: "20%" }}>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((ele, index) => {
                                    return (
                                        <tr key={ele.id} >
                                            <td className='cart_title'>
                                                <div className='cart_img'>
                                                    <img src={ele.image[0].url} alt="asad" />
                                                </div>
                                                <div className='cart_img_content'>
                                                    <p>{ele.name}</p>
                                                    <p>color :
                                                        <button style={{ background: ele.color }}></button></p>
                                                </div>
                                            </td>
                                            <td style={{ width: "20%" }} className='cart_price text-center'>
                                                <PriceFormate price={ele.price} />
                                            </td>
                                            <td style={{ width: "20%" }} className='cart_number w-100'>
                                                <CartNumber
                                                    stock={ele.max}
                                                    cartNumber={ele.amount}
                                                    increment={()=>setIncrement(ele.id, ele.max)}
                                                    decrement={()=>setDecrement(ele.id)}
                                                />

                                            </td>
                                            <td style={{ width: "20%" }} className='cart_subtotal text-center'>
                                                {<PriceFormate price={ele.price * ele.amount} />}

                                            </td>
                                            <td style={{ width: "20%" }} className='cart_remove text-center'>
                                                <MdDelete onClick={() => RemoveCart(ele.id)} />

                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='cart_button col-12'>
                        <button className='btn btn-primary'>
                            Continue Shopping
                        </button>
                        <button className='btn btn-danger' onClick={ClearCart}>
                            Clear Cart
                        </button>


                    </div>
                    <div className='col-12 Total_Summary'>
                        <div className='Total_Summary_Content'>
                            <p>SubTotal : <strong><PriceFormate price={total_Price} /></strong></p>
                            <p>Shipping Fee : <strong><PriceFormate price={shipping_fee} /></strong> </p>
                            <hr/>
                            <p>Order Total : <strong><PriceFormate price={total_Price + shipping_fee} /></strong></p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Cart
