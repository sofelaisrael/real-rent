import React , {useState, useEffect, useContext} from 'react';

//
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//
import { HouseContext } from '../Contexts/HouseContext';

export default function PropertyDropdown() {
    const {property, setProperty, properties} = useContext(HouseContext)
    const [open, setOpen] = useState(false)
    return(
        <div className='dro' onClick={() => setOpen(!open)}>
            <div className="drop">
                <div className="div d-flex flex-row align-items-center ml-0">
                    <RiHome5Line className='dropIcon' style={{fontSize: '25px', margin: '0 20px 0 0'}} />
                    <div className="d-flex flex-column text-left">
                        <div className="country">{property}</div>
                        <div className="select">Select a place</div>
                    </div>
                </div>
                
                {open ? (
                <RiArrowUpSLine className='' style={{fontSize: '20px'}} />
                ) : (
                <RiArrowDownSLine className='' style={{fontSize: '20px'}} />
                )}
            </div>
            
            <div className={open ? 'items d-block' : 'items d-none'}>
                {properties.map((type, index) => {
                    return(
                        <li onClick={() => setProperty(type)} key={index}>{type}</li>
                    )
                })}
            </div>
        </div>
    )
}