import './StepTwo.css'

function ShippingMethod({ inputVaule, fast, tagTitle, tagDescription, tagCosts}){
  return(
    <div className='formRow'>
      <input name='ta-method' type='radio' value={inputVaule} />
      <p className={fast ? ('tagTitle ' + fast) : 'tagTitle'}>{tagTitle}</p>
      <p className='tagDescription'>{tagDescription}</p>
      <p className='tagCosts'>{tagCosts}</p>
    </div>
  )
}

export default function StepTwo() {
  return(
    <div className='partTwo'>
      <h2 className='partTitle'>運送方式</h2>
      <div className='shippingMethod'>
        <ShippingMethod
          inputVaule='free'
          fast=''
          tagTitle='標準運送'
          tagDescription='約3~7個工作天'
          tagCosts='免費'
        />

        <ShippingMethod
          inputVaule='cost'
          fast='fast'
          tagTitle='DHL 貨運'
          tagDescription='48小時內送達'
          tagCosts='$500'
        />
        
      </div>
    </div>
  )
}