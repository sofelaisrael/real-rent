import React, {useContext} from 'react';
import {RiSearch2Line} from 'react-icons/ri'
import PriceRangeDropdown from './PriceRangeDropdown';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';

//
import { HouseContext } from '../Contexts/HouseContext';

export default function Search() {
    const {house, click} =useContext(HouseContext)
    return(
        <div className="earch container-fluid d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div className="c m-3">
                <CountryDropdown />
            </div>
            <div className="p m-3">
                <PropertyDropdown />
            </div>
            <div className="pr m-3">
                <PriceRangeDropdown />
            </div>
            <div onClick={() => click()} className='d-flex s justify-content-center'>
            <RiSearch2Line />
            </div>
        </div>
    )
}