import React, { useState } from 'react';
import { TiTick, TiMinus, TiPlus } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import {useCart} from "../Context/CartContext"

const ColorBtn = ({ productDetail }) => {
    const {addToCart} = useCart();
    const { colors = [], stock, id } = productDetail;
    const [colorTick, setColorTick] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    const Increment = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }
    const Decrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)

    }



    return (
        <section>
            <div className='color_section'>
                Color :
                {
                    colors.map((curColor, index) => {
                        return (
                            <button key={index} style={{ background: curColor }}
                                onClick={() => setColorTick(curColor)}>

                                {curColor === colorTick ? (<TiTick style={{ color: curColor === "#FFFFFF" ? "black" : "white" }} />) : ""}

                            </button>
                        )
                    })
                }
            </div>
            {/* ============================ Add Cart =============================  */}
            <div className='cart_btn'>
                <div className='toggle_amount'>
                    <button onClick={Decrement}>
                        <TiMinus />
                    </button>

                    <div className='cart_amount'>
                        {amount}
                    </div>

                    <button onClick={Increment}>
                        <TiPlus />
                    </button>
                </div>
                <NavLink to="/cart" className="btn btn-primary" 
                onClick={()=>addToCart(productDetail, id,amount,colorTick)}
                >Add to Cart</NavLink>


            </div>
        </section>
    )
}

export default ColorBtn
