import './ProgressControl.css'

export default function ProgressControl({step, onPrevious, onNext, onSubmit}) {
  return (
    <div className="btn computerBtn">
      {
        step === 1 ? null : (<button className="btnPrevious computerPrevious" onClick={onPrevious}>← 上一步</button>)
      }
      {
        step === 3 ? (
          <button 
            className="btnNext computerNext"
            onClick={onSubmit}
          >
            確認下單
          </button>
        ) :
        (
          <button 
            className="btnNext computerNext" 
              onClick={onNext}
          >
            下一步 →
          </button>
        )
      }
    </div>
  )

}