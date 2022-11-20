import './App.css';
// import { useState } from 'react';
// import { CartcountContext } from './components/container/ContainerContext'
import Main from './components/Main/main'
import Cart from './components/Cart/Cart'

function App() {
  let test = 0
  // const [test, setTest] = useState(0)

  // const tt ={
  //   test,
  //   setTest
  // }
  return (
    <div
      className='container'
    >
      <div
        className='sendInfo'
      >
        <Main />
      </div>
      <div
        className='shoppingCart'
      >
        {/* <CartcountContext value={tt}>
          <Cart />
        </CartcountContext> */}

        <Cart
         tt={test}
        />
      </div>
    </div>
  );
}

export default App;
