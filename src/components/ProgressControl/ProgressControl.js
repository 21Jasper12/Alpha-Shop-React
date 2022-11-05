import './ProgressControl.css'

export default function ProgressControl({stepId}) {
  if(stepId === 1){
    return (
      <div className="btn computerBtn">
        <button className="btnNext computerNext">下一步 →</button>
      </div>
    )
  }

  if(stepId === 2){
    return (
      <div className="btn computerBtn">
        <button className="btnPrevious computerPrevious">← 上一步</button>
        <button className="btnNext computerNext">下一步 →</button>
      </div>
    )
  }
  
  if (stepId === 3) {
    return (
      <div className="btn computerBtn">
        <button className="btnPrevious computerPrevious">← 上一步</button>
        <button className="btnNext computerNext">送出訂單</button>
      </div>
    )
  }
}