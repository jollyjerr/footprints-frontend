import React from 'react'

export default function ProfileInfo({houses, vehicles}) {

    const renderHouses = () => (
        houses.map(house => (
            <div className="icon" >
                <p>🏠{house.location}</p>
            </div>
        ))
    )

    const renderVehicles = () => (
        vehicles.map(vehicle => (
            <div className="icon" >
                <p>🚗{`${vehicle.make} ${vehicle.model}`}</p>
            </div>
        ))
    )

    return (
        <div className="profile-info">
            <div className="small-card" >
                {renderHouses()}
            </div> 
            <div className="small-card" >
                {renderVehicles()}
            </div>
        </div>
    )
}
