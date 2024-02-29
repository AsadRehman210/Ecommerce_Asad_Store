const cartReducer = (state, action) => {
    switch (action.type) {
        case "Add_TO_Cart":
            const { productDetail, id, amount, colorTick } = action.payload;
            let existingProduct = state.cart.find((curEle, index) => {
                return curEle.id === id + colorTick

            })
            if (existingProduct) {
                let updatedProduct = state.cart.map((curEle) => {
                    if (curEle.id === id + colorTick) {
                        let updatedAmount = curEle.amount + amount
                        return {
                            ...curEle,
                            amount: updatedAmount
                        }
                    } else {
                        return curEle
                    }
                })
                return {
                    ...state,
                    cart: updatedProduct
                }

            } else {
                const cartProduct = {
                    id: id + colorTick,
                    name: productDetail.name,
                    color: colorTick,
                    amount: amount,
                    price: productDetail.price,
                    image: productDetail.image,
                    max: productDetail.stock
                }
                return {
                    ...state,
                    cart: [...state.cart, cartProduct],


                }
            }


            ;
        case "Set_Increment":
            let updatedProduct = state.cart.map((curEle) => {
                if (curEle.id === action.payload.id) {
                    let inCrementAmount = curEle.amount + 1
                    if (inCrementAmount >= curEle.max) {
                        inCrementAmount = curEle.max
                    }
                    return {
                        ...curEle,
                        amount: inCrementAmount,
                    }
                } else {
                    return curEle
                }


            })
            return {
                ...state,
                cart: updatedProduct

            }
        case "Set_Decrement":
            let updatedProduct_dec = state.cart.map((curEle) => {
                if (curEle.id === action.payload) {
                    let decreAmount = curEle.amount - 1
                    if (decreAmount <= 1) {
                        decreAmount = 1
                    }
                    return {
                        ...curEle,
                        amount: decreAmount
                    }
                } else {
                    return curEle
                }

            })
            return {
                ...state,
                cart: updatedProduct_dec

            }
        case "Cart_Total_Item":
            let totalItem = state.cart.reduce((acc, curEle) => {
                return (acc + curEle.amount)
            },0)
            return {
                ...state,
                total_item: totalItem

            }
        case "Cart_Total_Amount":
            let totalAmount = state.cart.reduce((acc, curEle)=>{
                return acc + (curEle.price * curEle.amount)
            },0)
            return{
                ...state,
                total_Price: totalAmount

            }

        case "Remove_Cart":
            const deleteCart = state.cart.filter((ele, index) => {
                return ele.id !== action.payload

            })
            return {
                ...state,
                cart: deleteCart
            }
        case "Clear_Cart":
            return {
                ...state,
                cart: []
            }

        default:
            return state
    }

}

export default cartReducer;