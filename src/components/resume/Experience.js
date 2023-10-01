import React from "react";
import ResumeCrad from './ResumeCrad'
import {motion} from "framer-motion"
import {mechanicalJobExperince,seExperinceData} from "../../data/mechanicalJobExperince"

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 mb-10 pb-20 font-titleFont flex flex-col lgl:flex-row  gap-20"
    >
      <div className="w-1/2 lgl:w-full">
        <div className="flex flex-col gap-4 ">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Up to now</p>
          <h2 className="text-4xl font-bold">Software Enginering Job Experience</h2>
        </div>
        <div className="mt-14  w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {
          seExperinceData.map(({title,subtitle,result,des,id})=>(
              <ResumeCrad
              key={id}
              title={title}
              subtitle={subtitle}
              result={result}
              des={des}   />
            ))
          }

        </div>
      </div>
      <div className="w-1/2 lgl:w-full">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-4xl font-bold">Mechanical Engineering Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {
            mechanicalJobExperince.map(({title,subtitle,result,des,id})=>(
              <ResumeCrad
              key={id}
              title={title}
              subtitle={subtitle}
              result={result}
              des={des}   />
            ))
          }

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;