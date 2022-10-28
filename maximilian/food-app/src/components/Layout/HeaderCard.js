import React,{useContext} from "react";
import CartIcon from "../Cart/CardIcon";
import classes from'./HeaderCard.module.css'
 import CartContex from "../../store/Cart-contex";

const HeaderCard=(props)=>{
    const cartCtx=useContext(CartContex);
    const numberOfcardItem=cartCtx.items.reduce((currentNumber,item)=>{
        return currentNumber+item.amount
    },0);
    return(
        <button className={classes.button} onClick={props.onClick} >
            <span className={classes.icon}><CartIcon/> </span>
            <span>Your card</span>
            <span className={classes.badge}>{numberOfcardItem}</span>
        </button>
    )
}
export default HeaderCard;




