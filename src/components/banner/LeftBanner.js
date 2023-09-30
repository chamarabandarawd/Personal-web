import React from 'react'
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact,FaWhatsappSquare } from 'react-icons/fa'
import { SiSpringboot} from 'react-icons/si'

import { useTypewriter, Cursor } from 'react-simple-typewriter'


const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder with Java.", "Full Stack Developer.", "UI Desihner."],
        loop: true,
        typeSpeed: 30,
        delaySpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal uppercase">Exploring My World</h4>
          <h1 className="text-5xl font-bold text-white">
            Hi, I'm <span className="text-designColor capitalize">Chamara Bandara</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
        I am a passionate software engineer, wielding a versatile arsenal of technologies. 
        Armed with a BSc Engineering degree from the  University of Moratuwa, I thrive in the 
        dynamic world of web development. My craft encompasses React, Angular, Node js, Spring Boot, 
        and Nest.js. I possess a unique blend of technical prowess and design finesse,
         ensuring that the web applications I create are both cutting-edge and visually 
         stunning. Together, let's embark on an exhilarating journey through the ever-evolving 
         digital landscape, where innovation knows no bounds.
        </p>
      </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me in
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                        <span className="bannerIcon">
                            <FaTwitter />
                        </span>
                        <span className="bannerIcon">
                            <FaWhatsappSquare />
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
                            <SiSpringboot />
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