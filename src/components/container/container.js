import StepProgress from './../StepProgress/StepProgress'
import StepOne from './../StepOne/StepOne'
import StepTwo from './../StepTwo/StepTwo'
import StepThree from './../StepThree/StepThree'
import ProgressControl from './../ProgressControl/ProgressControl'
import './container.css'


export default function container() {
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
          <StepProgress />
        </div>

        <div
          className='stepOne'
          style={{
            display: 'none'
          }}
        >
          <StepOne />
        </div>

        <div
          className='stepTwo'
          style={{
            display: 'none'
          }}
        >
          <StepTwo />
        </div>

        <div
          className='stepThree'
          
        >
          <StepThree />
        </div>

        <div
          className='progressControl'
        >
          <ProgressControl 
            stepId={1}
          />
        </div> 
      </div>

      <div
        className='shoppingCart'
      >
        <h1>TEST</h1>
      </div>
    </div>
  )
}