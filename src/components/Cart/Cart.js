import './Cart.css'

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

function ListDetail({ carts }){
  const list = carts.map(cart => 
    <li className="listDetail" id={cart.id} key={cart.id}>
      <img src={cart.img} alt={cart.name} className="shoppingImg"/>
        <h4 className="commodityTitle">{cart.name}</h4>
        <div className="shoppingBtn">
          <button className="reduce listBtn">-</button>
          <span className="count">{cart.quantity}</span>
          <button className="increase listBtn">+</button>
        </div>
        <h5 className="price">${cart.price}</h5>
    </li>
  )

  return list
}


export default function Cart(){
  return(
    <div className="shoppingContainer">
      <div className="shoppingTitle">
        <h3>購物籃</h3>
      </div>

      <div className="shoppingContent">
        <ul className="shoppingList">
          <ListDetail
            carts={items}
          />
        </ul>

        <div className="transportationFee">
          <p className="feeTitle">
            運費
            <span className="feePrice">免費</span>
          </p>
        </div>

        <div className="shoppingTotal">
          <p className="totalTitle">
            小計
            <span className="total">$<span className="totalPrice">0</span></span>
          </p>
        </div>
      </div>
    </div>
  )
}