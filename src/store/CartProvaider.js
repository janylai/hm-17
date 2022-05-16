import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (prevState, action) => {
    if (action.type === 'ADD') {
        console.log(action.item);
        const findIndex = prevState.items.findIndex((el)=> el.id == action.item.id)
        console.log(findIndex);
        if (findIndex === -1) {
            let newItems = {...action.item, amount: 1}
            const updatedItems = prevState.items.concat(newItems)
            const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount
            return{
                ...prevState,
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        } else{
            const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount
            const updatedItems = prevState.items.map((el, index) => {
                return findIndex === index ? {...el, amount: el.amount + action.item.amount, price: el.price + action.item.price * action.item.amount} : el
            })
            return{
                ...prevState,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            }
        }
     
   
    }
    return defaultCartState
  }

 const CartProvaider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)
  
    const addItemToCartHandler = (item) => {
        dispatchCart({type: 'ADD', item: item})
    }
    const removeItemFromCartHandler = (id) => {}

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

   return(
       <CartContext.Provider value= {cartContext}>
        {props.children}
       </CartContext.Provider>
   )
}

export default CartProvaider