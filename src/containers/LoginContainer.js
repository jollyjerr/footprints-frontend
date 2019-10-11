import React from 'react'

export default function LoginContainer({logIn}) {

    const handleSubmit = (form) => {
        console.log(form)
    }

    return (
        <div className="login-container" >
            <form className="login-form" onSubmit={(event) => handleSubmit(event.target)} >

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
