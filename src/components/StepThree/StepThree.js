import './StepThree.css'

function PaymentInfo({ divname, title, holder}){
  return(
    <div className={divname}>
      <label>{title}</label>
      <input type='text' placeholder={holder} />
    </div>
  )
}

export default function StepThree() {
  return(
    <div className='partThree'>
      <h2 className='partTitle'>付款資訊</h2>
      <div className='paymentInfo'>

        <PaymentInfo
          divname='cardName'
          title='持卡人姓名'
          holder='John Doe'
        />

        <PaymentInfo
          divname='cardId'
          title='卡號'
          holder='1111 2222 3333 4444'
        />


        <PaymentInfo
          divname='cardDateLine'
          title='有效期限'
          holder='MM/YY'
        />

        <PaymentInfo
          divname='cardCvc'
          title='CVC/CCV'
          holder='123'
        />

      </div>
    </div>
  )
}