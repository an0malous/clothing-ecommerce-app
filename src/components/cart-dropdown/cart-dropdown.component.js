import React from 'react';
import { connect } from 'react-redux'
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CustomButton from '../custom-button/custom-button.component';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { withRouter } from 'react-router-dom';
const CartDropdown = ({ cartItems, history, dispatch }) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ?
            (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
        : (<span className="empty-message">Cart has no items</span>)} 
            <CustomButton onClick={()=> {
                history.push('/checkout');
                dispatch(toggleCartHidden())
                }}>
                CHECKOUT</CustomButton>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));