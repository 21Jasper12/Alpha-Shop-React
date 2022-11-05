import './StepOne.css'

export default function StepOne() {
  return (
    <div className='partOne'>
      <h2 className='partTitle'>寄送地址</h2>
      <div className='addressDetail'>
        <div className='gender'><label>稱謂</label>
          <div className='selectWrapper'>
            <select id='a-type' required>
              <option value='man'>先生</option>
              <option value='woman'>小姐</option>
            </select>
          </div>
        </div>

        <div className='realName'>
          <label>姓名</label>
          <input id='bank-code' type='text' placeholder='請輸入姓名'/>
        </div>

        <div className='mobile'>
          <label>電話</label>
          <input id='bank-code' type='text' placeholder='請輸入行動電話'/>
        </div>

        <div className='email'>
          <label>Email</label>
          <input id='bank-code' type='text' placeholder='請輸入電子郵件'/>
        </div>

        <div className='county'><label>縣市</label>
          <div className='selectWrapper'>
            <select id='aType'>
              <option value={'default'} disabled>請選擇縣市</option>
              <option value={'taipei'}>台北</option>
              <option value={'taichung'}>台中</option>
              <option value={'kaohsiung'}>高雄</option>
            </select>
          </div>
        </div>

        <div className='address'>
          <label>地址</label>
          <input id='bank-code' type='text' placeholder='請輸入地址'/>
        </div>
      </div>

    </div>
  )
}
