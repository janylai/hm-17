import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modalka from '../UI/Modal'
import classes from './Cart.module.css'
const Cart = (props) => {
	const contextData = useContext(CartContext)

	const cartItem = (
		<ul className={classes['cart-items']}>
			{contextData.items.map((item)=>(
                <li key={item.id}>{item.name}
				<h5>{item.price}</h5>
				<h5>{item.amount}</h5></li>
            ))}

		</ul>
		
	)
	return (
		<Modalka onCloseCart = {props.onCloseCart} >
			{cartItem}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{contextData.totalAmount.toFixed(2)}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['buttono--ilt']} onClick={props.onCloseCart} >Close</button>
				<button className={classes.button}>Open</button>
			</div>
		</Modalka>
	)
}

export default Cart
