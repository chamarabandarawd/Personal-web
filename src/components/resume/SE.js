import React from 'react'
import { seData } from '../../data/seData'
import ResumeCrad from './ResumeCrad'
import {motion} from "framer-motion"
import CertificateCard from './CertificateCard'

const SE = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
    <div className=' py-12 font-titleFont'>
    <p className='text-sm text-designColor tracking-[4px]'></p>
    <h2 className='text-4xl font-bold'>Software Engineering Related Qulification</h2>
</div>
<div className='className="mt-14 w-3/4 h-[2000px] border-l-[6px] border-l-black 
border-opacity-30 flex flex-col gap-10'>
    {seData.map(({title,subtitle,result,des,id,link, isLinkAvailable})=>(
            <CertificateCard key={id} title={title} subtitle={subtitle} result={result} des={des} link={link}  isLinkAvailable={ isLinkAvailable}/>
    ))}
    
</div>
    </motion.div>
  )
}

export default SE