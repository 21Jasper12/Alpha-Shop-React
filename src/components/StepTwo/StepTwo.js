import './StepTwo.css'

export default function StepTwo() {
  return(
    <div className='partTwo'>
      <h2 className='partTitle'>運送方式</h2>
      <div className='shippingMethod'>
        <div className='formRow'>
          <input name='ta-method' type='radio' value='free'/>
            <p className='tagTitle'>標準運送</p>
            <p className='tagDescription'>約3~7個工作天</p>
            <p className='tagCosts'>免費</p>
        </div>

        <div className='formRow'>
          <input name='ta-method' type='radio' value='cost'/>
            <p className='tagTitle fast'>DHL 貨運</p>
            <p className='tagDescription'>48小時內送達</p>
            <p className='tagCosts'>$500</p>
        </div>
      </div>
    </div>
  )
}