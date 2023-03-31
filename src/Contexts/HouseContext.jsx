import React, { useState, createContext, useEffect } from 'react';
import { houseData } from '../data/data';


export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
    const [house, setHouse] = useState(houseData)

    const [country, setCountry] = useState('Location (any)')

    const [countries, setCountries] = useState([])

    const [property, setProperty] = useState('Property Type (any)')

    const [price, setPrice] = useState('Price Range (any)')

    const [properties, setProperties] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const all = house.map((house) => {
            return house.country
        })
        const unique = ['location (any)', ...new Set(all)]
        setCountries(unique)
    }, [])

    useEffect(() => {
        const allP= house.map((house) => {
            return house.type
        })
        const uniqueP = ['property type (any)', ...new Set(allP)]
        setProperties(uniqueP)
    }, [])

    const click = () => {
        const isDef = (str) => {
            return str.split(' ').includes('(any)')
        }
        const min = parseInt(price.split(' - ')[0])
        const max = parseInt(price.split(' - ')[1])

        const newHouses = houseData.filter((house) => {
            const housePrice = parseInt(house.price)

            if (house.country === country && 
                house.type === property && 
                housePrice >= min && 
                housePrice <= max) {
                    return house;
            }


            if (isDef(country) && isDef(price) && isDef(property)) {
                return house;
            }


            if (!isDef(country) && isDef(price) && isDef(property)) {
                return house.country === country;
            }
            if (isDef(country) && !isDef(price) && isDef(property)) {
                if (housePrice >= min && housePrice <= max) {
                    return house;
                }
            }
            if (isDef(country) && isDef(price) && !isDef(property)) {
                return house.type === property;
            }


            if (!isDef(country) && !isDef(property) && isDef(price)) {
                return house.country === country && house.type === property;
            }
            if (!isDef(country) && isDef(property) && !isDef(price)) {
                if (housePrice >= min && housePrice <= max) {
                    return house.country === country;
                }
            }
            if (isDef(country) && !isDef(price) && !isDef(property)) {
                if (housePrice >= min && housePrice <= max) {
                    return house.type === property;
                }
            }
        })
        setLoading(true)

        setTimeout(() => {
            return( newHouses.length < 1 ? setHouse([]) : setHouse(newHouses),
            setLoading(false)
        )
        }, 1000)
    }

    return(
    <HouseContext.Provider value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        house,
        click,
        loading,
    }}>
        {children} 
    </HouseContext.Provider>
    )
}
export default HouseContextProvider;