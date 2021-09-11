import React from 'react'

export default function LowerBlock(props) {
  const {transaction} = props
  return (
    <div>
      <h2>Transactions</h2>
      {
        transaction.map(each => {
          return (<div key={each.index} className='each-Map'>{each.date} - <strong>{each.value} - <span className={`${each.type}`}>{each.type}</span></strong></div>)
        })
      }
    </div>
  )
}
