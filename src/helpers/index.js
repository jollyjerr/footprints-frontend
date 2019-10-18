export const apiURL = 'http://localhost:5000/api'

export const userOptions = (user) => {
    return {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: user.name,
            password: user.password
        })
    }
}

export const authHeader = () => {
    return localStorage.getItem("footprintsJWT")
}

export const logIn = (response) => {
    localStorage.setItem("footprintsJWT", response.tokenString)
    return response.userFromRepo
}