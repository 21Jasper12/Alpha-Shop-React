import './StepThree.css'

export default function StepThree() {
  return(
    <div className='partThree'>
      <h2 className='partTitle'>付款資訊</h2>
      <div className='paymentInfo'>
        <div className='cardName'>
          <label>持卡人姓名</label>
          <input id='bank-code' type='text' placeholder='John Doe'/>
        </div>

        <div className='cardId'>
          <label>卡號</label>
          <input id='bank-code' type='text' placeholder='1111 2222 3333 4444'/>
        </div>

        <div className='cardDateLine'>
          <label>有效期限</label>
          <input id='bank-code' type='text' placeholder='MM/YY'/>
        </div>

        <div className='cardCvc'>
          <label>CVC/CCV</label>
          <input id='bank-code' type='text' placeholder='123'/>
        </div>
      </div>
    </div>
  )
}