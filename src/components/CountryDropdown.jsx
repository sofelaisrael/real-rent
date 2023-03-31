import React , {useState,useEffect, useContext} from 'react';

//
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//
import { HouseContext } from '../Contexts/HouseContext';

export default function CountryDropdown() {
    const {country, setCountry, countries} = useContext(HouseContext)
    const [open, setOpen] = useState(false)
    return(
        <div className='dro' onClick={() => setOpen(!open)}>
            <div className="drop">
                <div className="div d-flex flex-row align-items-center ml-0">
                    <RiMapPinLine className='dropIcon' style={{fontSize: '25px', margin: '0 20px 0 0'}} />
                    <div className="d-flex flex-column text-left">
                        <div className="country">{country}</div>
                        <div className="select">Select a location</div>
                    </div>
                </div>
                
                {open ? (
                <RiArrowUpSLine className='' style={{fontSize: '20px'}} />
                ) : (
                <RiArrowDownSLine className='' style={{fontSize: '20px'}} />
                )}
            </div>
            
            <div className={open ? 'items d-block' : 'items d-none'}>
                {countries.map((country, index) => {
                    return(
                        <li onClick={() => setCountry(country)} key={index}>{country}</li>
                    )
                })}
            </div>
        </div>
    )
}