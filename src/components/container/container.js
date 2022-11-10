import { useState } from 'react'
import StepProgress from './../StepProgress/StepProgress'
import StepOne from './../StepOne/StepOne'
import StepTwo from './../StepTwo/StepTwo'
import StepThree from './../StepThree/StepThree'
import ProgressControl from './../ProgressControl/ProgressControl'
import Cart from './../Cart/Cart'
import './container.css'




export default function Container() {
  const [step, setStep] = useState(1)
  
  function handlePrevious(){
    step > 1 && setStep(step - 1)
  }
  function handleNext() {
    step < 3 && setStep(step + 1)
  }

  return(
    <div
      className='container'
    >
      <div
        className='sendInfo'
      >
        <div
          className='stepProgress'
        >
          <StepProgress 
            step={step}
          />
        </div>

        <div
          className='stepOne'
          style={{
            display: step === 1 ? 'block' : 'none'
          }}
        >
          <StepOne />
        </div>

        <div
          className='stepTwo'
          style={{
            display: step === 2 ? 'block' : 'none'
          }}
        >
          <StepTwo />
        </div>

        <div
          className='stepThree'
          style={{
            display: step === 3 ? 'block' : 'none'
          }}
        >
          <StepThree />
        </div>

        <div
          className='progressControl'
        >
          <ProgressControl 
            step={step}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div> 
      </div>

      <div
        className='shoppingCart'
      >
        <Cart />
      </div>
    </div>
  )
}