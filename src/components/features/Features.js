import React from 'react'
import Title from '../layouts/Title'
import Card from '../layouts/Card'
import { AiFillAppstore } from "react-icons/ai";
import { featuresData } from '../../data/data';

const Features = () => {
  return (
    <section id='features' className="w-full  py-20  border-b-[px] border-b-black">
      <Title title='feature' des='what I do'/>
      <div className='grid grid-cols-3 gap-20'> 

      {featuresData.map(({title,des,icon,id})=>(
        
        <Card key={id} title={title} des={des} icon={icon}/>
      ))}

      <Card 
      title='Business Stratagy'
      des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
      icon={<AiFillAppstore />}
      />

      </div>

    
</section>
  )
}

export default Features