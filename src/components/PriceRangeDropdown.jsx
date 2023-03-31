import React , {useState, useEffect, useContext} from 'react';

//
import { RiWalletLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

//
import { HouseContext } from '../Contexts/HouseContext';

export default function PriceRangeDropdown() {
    const {price, setPrice} = useContext(HouseContext)
    
    const [open, setOpen] = useState(false)
    
    const prices = [
        {
            value: 'price-range (any)'
        },
        {
            value: '100000 - 160000'
        },
        {
            value: '160000 - 220000'
        },
        {
            value: '220000 - 300000'
        },
    ]

    return(
        <div className='dro' onClick={() => setOpen(!open)}>
            <div className="drop">
                <div className="div d-flex flex-row align-items-center ml-0">
                    <RiWalletLine className='dropIcon' style={{fontSize: '25px', margin: '0 20px 0 0'}} />
                    <div className="d-flex flex-column text-left">
                        <div className="country">{price}</div>
                        <div className="select">Choose a price range</div>
                    </div>
                </div>
                
                {open ? (
                <RiArrowUpSLine className='' style={{fontSize: '20px'}} />
                ) : (
                <RiArrowDownSLine className='' style={{fontSize: '20px'}} />
                )}
            </div>
            
            <div className={open ? 'items d-block' : 'items d-none'}>
                {prices.map((price, index) => {
                    return(
                        <li onClick={() => setPrice(price.value)} key={index}>{price.value}</li>
                    )
                })}
            </div>
        </div>
    )
}