import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Mail from './Mail'

const List = () => {
  const [mails, setMails] = useState([])

  useEffect(() => {
    const getMails = async () => {
      const response = await axios.get('http://localhost:5000/api/mails')
      setMails(response.data)
    }
    getMails()
  }, [])

  return (
    <table>
      <tr>
        <th>#</th>
        <th>From</th>
        <th>To</th>
        <th>Message</th>
        <th>Reference</th>
      </tr>
       { mails.map((mail, index) => <Mail key={mail.reference} mail={mail} index={index} />  )}
    </table>
  )
}

export default List
