import { useState } from 'react'
import './Cart.css'
import { numberWithCommas } from './../utilities'

// data
const items = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]




export default function Cart() {
  const [products, setProducts] = useState(items)

  const totalCost = numberWithCommas(
    products.reduce((acc, current) => {
      acc += (current.price * current.quantity)
      return acc
    }, 0)
  )


  function ListDetail({ carts }) {
    return(
      <ul className="shoppingList">
        {
          carts.map(cart =>
            <li className="listDetail" id={cart.id} key={cart.id}>
              <img src={cart.img} alt={cart.name} className="shoppingImg" />
              <h4 className="commodityTitle">{cart.name}</h4>
              <div className="shoppingBtn">
                <button
                  className="reduce listBtn"
                  onClick={() => { reduce(cart.id) }}
                >
                  -
                </button>

                <span className="count">{cart.quantity}</span>

                <button
                  className="increase listBtn"
                  onClick={() => { increase(cart.id) }}
                >
                  +
                </button>
              </div>
              <h5 className="price">${cart.price}</h5>
            </li>
          )
        }
      </ul>
    )
  }

  function increase(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      }
      else {
        return product
      }
    }))
  }

  function reduce(productId) {
    setProducts(products.map(product => {
      if ((product.id === productId) && (product.quantity > 0)) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      else {
        return product
      }
    }))
  }

  return (
    <div className="shoppingContainer">
      <div className="shoppingTitle">
        <h3>購物籃</h3>
      </div>

      <div className="shoppingContent">
        <ListDetail
          carts={products}
        />
        

        <div className="transportationFee">
          <p className="feeTitle">
            運費
            <span className="feePrice">免費</span>
          </p>
        </div>

        <div className="shoppingTotal">
          <p className="totalTitle">
            小計
            <span className="total">$<span className="totalPrice">{totalCost}</span></span>
          </p>
        </div>
      </div>
    </div>
  )
}