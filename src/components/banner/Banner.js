import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

const Banner = () => {


    return (
        <section
            id='home'
            className="w-full pt-10 py-20  flex item-center border-b-[px] font-titleFont border-b-black">
                <LeftBanner/>
            <RightBanner/>
        </section>
    )
}

export default Banner