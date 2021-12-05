import React from 'react'

const Mail = ({ mail, index = 0 }) => {
  return (
    <tr>
      <td>{ index + 1 }</td>
      <td>{ mail.from }</td>
      <td>{ mail.to }</td>
      <td>{ mail.message }</td>
      <td>{ mail.reference }</td>
    </tr>
  )
}

export default Mail
