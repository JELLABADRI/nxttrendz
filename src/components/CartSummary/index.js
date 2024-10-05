import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
    <CartContext.Consumer>
     {value =>{
        const {cartList}=value
        let total=0
        total=cartList.map(each => {
            total+=each.price*each.quantity
        })

        return (
            <div>
             <div>
              <h1>Order Total: Rs {total}/-</h1>
              <p> Items in cart</p>
              <button>Checkout</button>
               
             </div>
            </div>
        )
     }}
    </CartContext.Consumer>
)

export default CartSummary