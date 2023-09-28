import React from 'react'
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from 'react-icons/fa'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Desihner."],
        loop: true,
        typeSpeed: 30,
        delaySpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal' >WELCOME TO MY WORLD</h4>
                <h1 className='text-lg font-bold text-white'>
                    Hi, I'm {" "}
                    <span className='text-designColor capitalize' >Chamara Bandara</span>
                </h1>
                <h2>a {""} <span>{text}</span></h2>
                <p>
                    I'm sorry, but I don't have any information about you as I don't have access to personal data or the internet.
                    However, I can help you write a brief self-description based on the information you provide.
                    Please tell
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me in
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaFacebookF />
                        </span>
                        <span className="bannerIcon">
                            <FaTwitter />
                        </span>
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiNextdotjs />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner