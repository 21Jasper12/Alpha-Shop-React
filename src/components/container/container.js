import { useState } from 'react'
import { StepThreeContext, CartcountContext } from './ContainerContext'
import StepProgress from './../StepProgress/StepProgress'
import StepOne from './../StepOne/StepOne'
import StepTwo from './../StepTwo/StepTwo'
import StepThree from './../StepThree/StepThree'
import ProgressControl from './../ProgressControl/ProgressControl'
import Cart from './../Cart/Cart'
import './container.css'




export default function Container() {
  const [step, setStep] = useState(1)
  const [stepThreeData, setStepThreeData] = useState({
    cardName: '',
    cardId: '',
    cardDateLine: '',
    cardCvc: ''
  })

  const [cartData, setCartData] = useState(
    [
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
    ],
  )

  const totalCount = cartData.map(cart => cart.price * cart.quantity).reduce((a, b) => a + b)



  // ================================
  // ProgressControl 上一頁
  function handlePrevious() {
    step > 1 && setStep(step - 1)
  }
  // ProgressControl 下一頁
  function handleNext() {
    step < 3 && setStep(step + 1)
  }
  // ProgressControl 送出訂單
  function handleSubmit() {
    if ((!stepThreeData.cardName.length) || (!stepThreeData.cardId.length) || (!stepThreeData.cardDateLine.length) || (!stepThreeData.cardCvc.length)) {
      alert('請輸入持卡人資料')
      return
    }
    else {
      console.log(stepThreeData)
      console.log(totalCount)
    }
  }

  // 把資料透過useContext的方式傳入components
  const providerValue = {
    step,
    stepThreeData,
    setStepThreeData,
  }

  const CartproviderValue = {
    cartData,
    setCartData,
  }


  return (
    <div
      className='container'
    >
      <div
        className='sendInfo'
      >
        <StepProgress
          step={step}
        />

        <StepOne
          step={step}
        />

        <StepTwo
          step={step}
        />

        <StepThreeContext.Provider value={providerValue}>
          <StepThree />
        </StepThreeContext.Provider>

        <ProgressControl
          step={step}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
        />
      </div>

      <div
        className='shoppingCart'
      >
        <CartcountContext.Provider value={CartproviderValue}>
          <Cart />
        </CartcountContext.Provider>
      </div>
    </div>
  )
}