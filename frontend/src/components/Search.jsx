import React, { useState } from 'react'
import axios from 'axios'
import Mail from './Mail'

const Search = () => {

  const [value, setValue] = useState('')
  const [mail, setMail] = useState({})


  const clickHandler = async () => {
    const response = await axios.get(`http://localhost:5000/api/mails/${value}`)
    setMail(response.data)
    // setMail(JSON.parse(response.data))
  }
  return (
    <div>
      <div className="searchbar">
        <h1>Search in the reference values</h1>
        <input type="text" value={value} onChange={e=>setValue(e.target.value)} />
        <button className="submitBtn" onClick={clickHandler} >Search</button>
      </div>
      { Object.keys(mail).length ?
        <table>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>To</th>
            <th>Message</th>
            <th>Reference</th>
          </tr>
          {<Mail mail={mail} /> }
      </table>
      :
        <h3>No mails found</h3>
       }
    </div>
  )
}

export default Search
