export const apiURL = 'http://localhost:5000/api'

export const userOptions = (user) => {
    return {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    }
}

export const houseOptions = (house) => {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        location: house.location,
        squarefootage: house.squarefootage,
        food: house.food,
        solar: house.solar,
        wind: house.wind,
        geothermal: house.geothermal,
        userid: house.userid
      })
    };
}

export const vehicleOptions = (vehicle) => {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        fuel: vehicle.fuel,
        mpg: vehicle.mpg,
        userid: vehicle.userid
      })
    };
}

export const authHeader = () => {
    return localStorage.getItem("footprintsJWT")
}

export const logIn = (response) => {
    // localStorage.setItem("footprintsJWT", response.tokenString) //for future edit capabilities
    return response.id
}

export const fetchDirectLineToken = async () => {
    const resp = await fetch('https://directline.botframework.com/v3/directLine/tokens/generate', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer TbNgODk0csQ.BYATPK6dYuFlW2r94H0aUf-O8BowPbJfOmSYcCJXISg" //uncomment this line to interact with production bot
        }
    })
    return await resp.clone().json()
}