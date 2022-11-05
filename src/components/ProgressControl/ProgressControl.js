import './ProgressControl.css'

export default function ProgressControl({ stepId }) {
  return (
    <div className="btn computerBtn">
      {
        stepId === 1 ? null : (<button className="btnPrevious computerPrevious">← 上一步</button>)
      }
      {
        stepId === 3 ? (<button className="btnNext computerNext">送出訂單</button>) :
          (<button className="btnNext computerNext">下一步 →</button>)
      }
    </div>
  )

}