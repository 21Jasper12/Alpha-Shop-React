import './StepThree.css'
import { useContext } from 'react'
import { StepThreeContext } from '../container/StepThreeContext'

function PaymentInfo({ divname, title, holder, inputValue, onChange}){
  return(
    <div className={divname}>
      <label>{title}</label>
      <input 
        type='text' 
        placeholder={holder}
        value={inputValue}
        onChange={onChange} 
      />
    </div>
  )
}

export default function StepThree() {
  const { step, stepThreeData, setStepThreeData } = useContext(StepThreeContext)

  if(step !== 3){
    return null
  }
  else{
    return (
      <div className='partThree'>
        <h2 className='partTitle'>付款資訊</h2>
        <div className='paymentInfo'>

          <PaymentInfo
            divname='cardName'
            title='持卡人姓名'
            holder='John Doe'
            inputValue={stepThreeData.cardName}
            onChange={e => setStepThreeData({
              ...stepThreeData,
              cardName: e.target.value
            })}
          />

          <PaymentInfo
            divname='cardId'
            title='卡號'
            holder='1111 2222 3333 4444'
            inputValue={stepThreeData.cardId}
            onChange={e => setStepThreeData({
              ...stepThreeData,
              cardId: e.target.value
            })}
          />


          <PaymentInfo
            divname='cardDateLine'
            title='有效期限'
            holder='MM/YY'
            inputValue={stepThreeData.cardDateLine}
            onChange={e => setStepThreeData({
              ...stepThreeData,
              cardDateLine: e.target.value
            })}
          />

          <PaymentInfo
            divname='cardCvc'
            title='CVC/CCV'
            holder='123'
            inputValue={stepThreeData.cardCvc}
            onChange={e => setStepThreeData({
              ...stepThreeData,
              cardCvc: e.target.value
            })}
          />

        </div>
      </div>
    )
  }
  
}