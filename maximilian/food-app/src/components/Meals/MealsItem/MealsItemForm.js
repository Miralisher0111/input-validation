import Input from "../../UI/input/Input.js";
import React,{  useRef,useState } from "react";

import classes from './MealsItemForm.module.css'

const MealsItemForm = () => {

    const [amountIsValid,setAmountIsValid]=useState(true);
const amountInputRef=useRef()
const submitHandlerForm=(event)=>{
    event.preventDefault();
    const entredAmount=amountInputRef.current.value;
    const entredAmountNumber= +entredAmount;

    if
        (
        entredAmountNumber.trim().length===0 ||
        entredAmountNumber<1||
        entredAmountNumber>5
        ){
            setAmountIsValid(false)
            return;
        }
}


    return <form className={classes.form} onSubmit={submitHandlerForm}>
        <Input label='amount' 
        ref={amountInputRef}
        input={{
id:'amount_'+Math.random.toString(),
type:'number',
min:1,
max:5,
step:0.1,
defaultValue:1
        }}/>
        <button className={classes.button}>Add </button>
        {!amountIsValid&&<p> plese enter a valid amount !</p>}
    </form>
}


export default MealsItemForm;