import React from 'react'

export default function LoginContainer({logIn}) {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
    }

    return (
        <div className="login-container" >
            <form className="login-form" onSubmit={(event) => handleSubmit(event)} >
                <label htmlFor="username">Username:</label>
                <input type="text" id="username"/>
                <label htmlFor="password">Password:</label>
                <input type="text"/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
