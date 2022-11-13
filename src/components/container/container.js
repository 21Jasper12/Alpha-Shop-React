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
        <StepProgress 
          step={step}
        />
    
        <StepOne 
          step={step}
        />

        <StepTwo 
          step={step}
        />
        
        <StepThree 
          step={step}
        />
        
        <ProgressControl 
          step={step}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
         
      </div>

      <div
        className='shoppingCart'
      >
        <Cart />
      </div>
    </div>
  )
}