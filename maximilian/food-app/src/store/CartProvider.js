
import { useReducer } from 'react';
import CartContext from './Cart-contex';

const defaultCartState={
    items:[],
    totalAmount:0,
}

const cartReducer=(state,action)=>{
if(action.type==='ADD'){
    const updatedItems=state.items.concat(action.item);
    const updatedTotalAmount=state.totalAmount+action.price*action.amount;
    return {
        items:updatedItems,
        totalAmount:updatedTotalAmount
    }
}

    


} 


const CartProvider = props => {
    
const [cardState,dispatchCardAction]=useReducer(cartReducer,defaultCartState)
    const addItemHandler = (item) => { 
        dispatchCardAction({type:'ADD'})
    }
    const removeItemHandler = (id) => { }
    
   
   

    const cartContext = {
        items: cardState.items,
        totalAmount: cardState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider