import React from 'react'

const CertificateCard = ({ title,subtitle,result,des,link, isLinkAvailable}) => {
    return (
        <div className="w-full h-1/3  group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                    <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                </span>
            </div>
            <div className="w-full h-auto bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
                <div className='flex gap-4 flex-col md:flex-row justify-between items-center'>
                    <div>
                        <h3 className='text-2xl font-semibold group-hover:text-white duration-300'
                        >{title}</h3>
                        <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>
                            {subtitle}</p>
                    </div>
                    <div>
                        <p className=" px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                            {result}</p>
                    </div>
                </div>
                {
                    isLinkAvailable && <a href={link} target="_blank"
                    className="cursor-pointer px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium"
                >See Certificate </a>
                }

                <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
                    {des}
                </p>
            </div>
        </div>
    )
}

export default CertificateCard