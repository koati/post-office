import React, { useState } from 'react'
import axios from 'axios'

const New = () => {

  const empty = {
    from: '',
    to: '',
    message: '',
    reference: ''
  }

  const [inputs , setInputs] = useState(empty)

  const handleInputChange = (e) =>{
      setInputs( {...inputs, [e.target.name]: e.target.value} )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/mails', inputs)
    .then(() => setInputs({...empty}))
    .catch(console.error)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">From</label>
        <input type="text" id="from" name="from" onChange={handleInputChange} value={ inputs.from } />

        <label htmlFor="to">To</label>
        <input type="text" id="to" name="to" onChange={handleInputChange} value={ inputs.to } />

        <label htmlFor="message">Message</label>
        <input type="text" id="message" name="message" onChange={handleInputChange} value={ inputs.message } />

        <label htmlFor="reference">Reference</label>
        <input type="text" id="reference" name="reference" onChange={handleInputChange} value={ inputs.reference } />

        <button className="submitBtn">Send</button>
      </form>
    </div>
  )
}

export default New
