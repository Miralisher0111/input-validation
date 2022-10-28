import React, { Fragment } from "react";
import mealImg from '../../assets/meals.jpg'
import HeaderCard from "./HeaderCard";
import classes from './Headers.module.css'
const  Header=(props)=>{
return(
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals </h1>
            <HeaderCard  onClick={props.onShowHandler}></HeaderCard>
            
            </header>
        <div className={classes["main-image"]}>
        <img src={mealImg} alt="reactmeals.img"></img>
        </div>
    </Fragment>
)
}

export default Header;