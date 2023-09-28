import React from 'react'
import { person } from '../../assets'
import LeftBanner from './LeftBanner'

const Banner = () => {


    return (
        <section
            id='home'
            className="w-full pt-10 py-20  flex item-center border-b-[px] font-titleFont border-b-black">
                <LeftBanner/>
            <div className='w-1/2'>
                <img src={person} alt="bannerImg" />
            </div>
        </section>
    )
}

export default Banner