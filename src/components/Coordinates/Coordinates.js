import React, {useEffect, useState} from 'react'
const useCoordinates = () => {
    const [coordinates, setCoordinates] = useState({
        lon: null,
        lat: null
    })

    let geoId;
    useEffect(() => {
        geoId = window.navigator.geolocation.watchPosition(postition => {
            setCoordinates({
                lat: postition.coords.latitude,
                lon: postition.coords.longitude
            })
        });

        return () => {
            navigator.geolocation.clearWatch(geoId)
        }
    })

    return coordinates
}

const Coordinates = () => {
    const coordinates = useCoordinates();

    return coordinates.lat == null 
        ? (<div>Loading ...</div>)
        : (<div>
            <h2>Latitude: {coordinates.lat}</h2>
            <h2>Longitude: {coordinates.lon}</h2>
        </div>)
}

export default Coordinates
