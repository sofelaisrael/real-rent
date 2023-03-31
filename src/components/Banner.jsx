import React from 'react';

//
import image from '../Assets/apkhyer.webp'
import Apartment1 from '../Assets/Apartment1.jpg'

//
import Search from './Search';

export default function Banner() {
    return(
        <>
        <div className="bann d-flex flex-column flex-lg-row align-items-center">
            <div className="text mx-5">
                <div className="text1 mx-5">
                    <span className='text-primary'>Rent</span>
                    <p>Your Dream House With Us</p>
                </div>
                <div className="text2 mx-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat corporis perspiciatis facilis facere nam tempore! Amet cupiditate non quia accusamus, soluta maxime harum quasi blanditiis cumque culpa libero in.
                </div>
            </div>
            <div className="img w-lg-50 w-100">
                <img className='w-100' src={Apartment1} alt="" />
            </div>
        </div>
        <div className="search container">
            <Search />
        </div>
        </>
    )
}