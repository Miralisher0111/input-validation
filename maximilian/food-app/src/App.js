
import React ,{Fragment,useState} from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Headers';
import Meals from './components/Meals/Meals';

function App() {

  const [showModal,setShowModal]=useState(false);
  
  const showModalHandler=()=>{
    setShowModal(true);
  }
  const closeModalHandler=()=>{
    setShowModal(false);
  }
  return (
 <Fragment>
{showModal&&<Cart onCloseHandler={closeModalHandler}/>}
  <Header onShowHandler={showModalHandler}/>
  
 <main>
<Meals/>
 </main>
 
 </Fragment>
  );
}

export default App;
