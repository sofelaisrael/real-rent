import React, {useState} from 'react';

import { houseData } from '../data/data';

import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

import {BiBed, BiBath, BiArea} from 'react-icons/bi'

import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';


const Details = () => {
    const {id} = useParams()
    const house = houseData.find((house) => {
        return house.id === parseInt(id)
    })
    const scr = 'none'
    const [src,setSrc] = useState(scr)
    const [open, setOpen] = useState(false)
    const scrset = (e) => {
        let newsrc = e.target.src 
        setSrc(newsrc)
        setOpen(!open)
    }
    /*const openModal = (image) => {
        setOpen(true)
        if (open) {
            return(
                <div className="modal">
                    <img src={`${image}`} alt="" />
                </div>
            )
        }
        
    }*/

    return(
        <>
        {open ? (
            <div className="cl position-fixed w-100 d-flex justify-content-center px-5" style={{background: 'rgba(0,0,0,.6)', zIndex:'100000'}}>
                <div className="ins d-flex justify-content-center position-relative align-items-center p-5" style={{height:'100vh', zIndex: '100000'}}>
                    <img alt='' src={`${src}`} className='posit w-100' />
                    <div className="close p-3 bg-danger d-inline position-absolute" onClick={() => setOpen(false)} style={{top: '20%', right: '0px'}}>&times;</div>
                </div>
            </div>
        ) : <div></div>}
        <div className="details px-4">
            <div className="right">
                <div className="d-flex justify-content-between">
                    <div className="home py-3">
                        {house.name}
                    </div>
                    <div className="info py-3 px-3">
                        <div className="type">{house.type}</div>
                        <div className="contry">{house.country}</div>
                    </div>
                </div>
                <div className="im w-100">
                    <img src={`${house.images}`} alt="" className='w-100' />
                </div>
                <div className='d-flex py-3 align-items-center text-dark'>
                    <div className='px-3'><BiBed />{house.bedrooms}</div>
                    <div className='px-3'><BiBath />{house.bathrooms}</div>
                    <div className='px-3'><BiArea />{house.surface}</div>
                </div>
                <div className="des text-dark">
                    {house.description}
                </div>
                <div className="pri text-primary">
                    ${house.price}
                </div>
            </div>
            <div className="left">
                <div>
                    <div className="agent d-flex justify-content-start">
                        <div className="agentimg">
                            <img src={`${house.agent.image}`} alt="" />
                        </div>
                        <div className="agentname text-dark">
                            {house.agent.name}
                            <div className="vie text-dark">
                                someone@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className='px-2 d-inline'><AiFillFacebook /></div>
                    <div className='px-2 d-inline'><AiFillInstagram /></div>
                    <div className='px-2 d-inline'><AiFillTwitterCircle /></div>
                    <div className="input row">
                        <input className='inp col-12' type="text" placeholder='Name*' />
                        <input className='inp col-12' type="email" placeholder='Email*' />
                        <input className='inp col-12' type="tel" placeholder='Phone*' />
                        <textarea className='rounded p-3' name="message" placeholder='Enter a Message' id="" cols="100" rows="10"></textarea>
                    </div>
                    <div className="choose d-flex">
                        <div className="send">
                            Send Message
                        </div>
                        <div className="call">
                            call
                        </div>
                    </div>
                    <div className="int">
                        Interiors
                    </div>
                    <div className="interior w-100 d-flex mt-4">
                        <div className="int1 px-1 rounded" style={{width: '100%', height: '100px', overflow: 'hidden'}} onClick={scrset}
                        >
                            <img src={`${house.interior1}`} alt="" style={{width: '100%'}} />
                        </div>
                        <div className="int2 px-1 rounded" style={{width: '100%', height: '100px', overflow: 'hidden'}}>
                            <img src={`${house.interior2}`} alt="" onClick={scrset} style={{width: '100%'}} />
                        </div>
                        <div className="int3 px-1 rounded" style={{width: '100%', height: '100px', overflow: 'hidden'}}>
                            <img src={`${house.interior3}`} alt="" onClick={scrset} style={{width: '100%'}} />
                        </div>
                    </div>
                    <div className="click text-center">
                        click to view images
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Details