import React, {useState} from 'react'
import {connect} from 'react-redux'


function LoginContainer(props) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
    }

    return (
        <div className="login-container" >
            <form className="login-form" onSubmit={(event) => handleSubmit(event)} >
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default connect(null, null)(LoginContainer)
