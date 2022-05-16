import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/layout/Header'
import Meals from './components/Meals/Meals'
import  CartProvaider  from './store/CartProvaider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
	  setCartIsShown(true)
  }

  const hideCartHandler = () => {
	  setCartIsShown(false)
  }

	return (
		<CartProvaider>
            {cartIsShown && <Cart onCloseCart = {hideCartHandler} />}
			<Header onShowCart = {showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvaider>
	)
}

export default App
