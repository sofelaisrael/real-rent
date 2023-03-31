import React from 'react';

import {BiBed, BiBath, BiArea} from 'react-icons/bi'

export default function House({house}) {
    const {images, type, address, country, bedrooms, bathrooms, surface, price} = house
    return(
        <div className='cont'>
            <img src={images} alt='no image' width='100%' height='300px' />
            <div className='info p-3'>
                <div className='type'>{type}</div>
                <div className='contry'>{country}</div>
            </div>
            <div className='d-flex align-items-center text-dark'>
                <div className='px-3'><BiBed />{bedrooms}</div>
                <div className='px-3'><BiBath />{bathrooms}</div>
                <div className='px-3'><BiArea />{surface}</div>
            </div>
            <div className='price p-3 pt-3 pb-4 text-primary'>${price}</div>
        </div>
        
    )
}