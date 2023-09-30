import React from 'react'
import ResumeCrad from './ResumeCrad'
import {resumeData} from '../../data/resumeData'
import {motion} from "framer-motion"

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
    <div className=' py-12 font-titleFont'>
    <p className='text-sm text-designColor tracking-[4px]'></p>
    <h2 className='text-4xl font-bold'>Eduaction Qualification</h2>
</div>
<div className='className="mt-14 w-3/4 h-[1000px] border-l-[6px] border-l-black 
border-opacity-30 flex flex-col gap-10'>
    {resumeData.map(({title,subtitle,result,des,id})=>(
            <ResumeCrad key={id} title={title} subtitle={subtitle} result={result} des={des}/>
    ))}
    
</div>
    </motion.div>
  )
}

export default Education