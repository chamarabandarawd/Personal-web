import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {projectsData} from '../../data/projectsData'

const Project = () => {
  return (
    <section id='projects' className="w-full  py-20  border-b-[px] border-b-black">
        <div className='flex justify-center items-center text-center '>            
      <Title 
      title='visit my portfolio and keep your feedback' 
      des='My Projects'/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-14'>
            {projectsData.map(({id,title,des,img})=>(
                <ProjectCard key={id} title={title} des={des} img={img}/>
            ))}
            

        </div>
      </section>
  )
}

export default Project