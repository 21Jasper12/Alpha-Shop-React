import { useState } from 'react'
import { StepThreeContext } from './../container/ContainerContext'
import StepProgress from './../StepProgress/StepProgress'
import StepOne from './../StepOne/StepOne'
import StepTwo from './../StepTwo/StepTwo'
import StepThree from './../StepThree/StepThree'
import ProgressControl from './../ProgressControl/ProgressControl'




export default function Main() {
  const [step, setStep] = useState(1)
  const [stepThreeData, setStepThreeData] = useState({
    cardName: '',
    cardId: '',
    cardDateLine: '',
    cardCvc: ''
  })

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
    }
  }

  // 把資料透過useContext的方式傳入components
  const providerValue = {
    step,
    stepThreeData,
    setStepThreeData,
  }


  return (
    <div>
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
  )
}