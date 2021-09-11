import React from 'react'

export default function UpperBlock(props) {
  const {clickButton, setInputVal, inputVal} = props
  const inputChange = (e) => {
    setInputVal(e.target.value)
  }
  return (
    <div>
      <div className="input" ><input onChange={(evt) => inputChange(evt)} type="number" value={inputVal} placeholder={0}/></div>
      <button className="button1"  onClick={() => clickButton('Add', inputVal)}>Add</button>
      <button className="button2" onClick={() => clickButton('Remove', inputVal)}>Remove</button>
    </div>
  )
}
