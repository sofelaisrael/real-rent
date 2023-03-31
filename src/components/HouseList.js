import React, {useContext} from 'react';
import { HouseContext } from '../Contexts/HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import {ImSpinner2} from 'react-icons/im'

export default function HomeList() {
    const {house, loading} = useContext(HouseContext)
    //console.log(house)
    if (loading) {
        return(
            <div className='d-flex justify-content-center'>
                <ImSpinner2 className='load my-5' />
            </div>
            
        )
    }
    if (house.length < 1) {
        return (
            <div  className='text-center p-5 my-5'>Sorry, nothing was found</div>
        )
    }
    return(
        <div className='banner'>
            <div className='container-fluid mx-auto'>
                <div className='rows'>
                    {house.map((house, index) => {
                        return(
                            <Link className='nope' key={index} to={`/property/${house.id}`}>
                                <House house={house}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}