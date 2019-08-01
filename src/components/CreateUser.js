import React from 'react'
import './stylingUser.css'

export default function LoginForm(props) {
  const { onChange, onSubmit, values } = props
  
  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div>
            <h4>Enter a Username</h4>
        </div>
        <input name={'name'} onChange={onChange} value={values.name} placeholder='Username' className='input' required/>
        <div>
          <button className="btn waves-effect waves-light" type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}