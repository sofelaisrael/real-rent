import React from 'react';

//
import { Link } from 'react-router-dom';

//
import Logo from '../Assets/4k.jpg'

export default function Header() {
    return(
        <div className="header container-fluid mx-auto w-100 d-flex justify-content-between align-items-center bg-white">
            <Link to='/' className='text-dark' style={{fontSize: '40px', fontFamily: 'monospace', transition: '0.4s'}}>
                <span className='text-primary'>I</span>-Rent
            </Link>

            <div className="but">
                <Link className='p-2 my-5 iu m-1 border text-dark rounded' to=''>
                    Log In
                </Link>
                <Link className='p-2 my-5 iu text-white m-1' to=''>
                    Sign Up
                </Link>
                
            </div>
        </div>
    )
}