import './App.css';
import Main from './components/Main/main'
import Cart from './components/Cart/Cart'

function App() {
  let test = 0
  return (
    <div
      className='container'
    >
      <div
        className='sendInfo'
      >
        <Main 
          tt={test}
        />
      </div>
      <div
        className='shoppingCart'
      >
        <Cart 
          tt={test}
        />
      </div>
    </div>
  );
}

export default App;
