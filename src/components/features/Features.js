import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { featuresData } from '../../data/featuresData';

const Features = () => {
  return (
    <section id='features' className="w-full  py-20  border-b-[px] border-b-black">
      <Title title='feature' des='what I do'/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20"> 

      {featuresData.map(({title,des,icon,id})=>(
        
        <Card key={id} title={title} des={des} icon={icon}/>
      ))}

      </div>

    
</section>
  )
}

export default Features