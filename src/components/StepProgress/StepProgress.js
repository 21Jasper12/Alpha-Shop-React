import './StepProgress.css'



export default function StepProgress() {
  return (
    <div>
      <div className='checkedTitle'>
        <h2>結帳</h2>
      </div>

      <div className='checkedStepper'>
        <div className='step active'>
          <div className='circleContainer'></div>
          <div className='labelContainer'>寄送地址</div>
        </div>
        <div className='step'>
          <div className='circleContainer'></div>
          <span className='connectLine'></span>
          <div className='labelContainer'>運送方式</div>
        </div>
        <div className='step'>
          <div className='circleContainer'></div>
          <span className='connectLine'></span>
          <div className='labelContainer'>付款資訊</div>
        </div>
      </div>
    </div >
  )
}