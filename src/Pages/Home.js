import React from 'react';

//
import { Link } from 'react-router-dom';

//
import Banner from '../components/Banner';
import HouseList from '../components/HouseList';

export default function Home() {
    return(
        <div className='banner'>
            <Banner />
            <HouseList />
        </div>
    )
}