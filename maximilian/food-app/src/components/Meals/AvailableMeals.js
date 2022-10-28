import Card from '../UI/Card'
import classes from './Available.module.css'
import MealsItem from './MealsItem/MealsItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const MealsList=DUMMY_MEALS.map(meal=> <MealsItem key={meal.id} name={meal.name} price={meal.price} description={meal.description}/>)

const AvailableMeals=()=>{
return(
    <section className={classes.meals}>
      <Card>
      <ul>
            {
                MealsList
            }
        </ul>
      </Card>
       
    </section>
)
}


export default AvailableMeals;