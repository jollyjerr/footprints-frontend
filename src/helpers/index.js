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

export const fetchDirectLineToken = async () => {
    const resp = await fetch('https://directline.botframework.com/v3/directLine/tokens/generate', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer TbNgODk0csQ.BYATPK6dYuFlW2r94H0aUf-O8BowPbJfOmSYcCJXISg"
        }
    })
    return await resp.clone().json()
}