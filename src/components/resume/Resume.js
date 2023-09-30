import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Achievement from './Achievement'
import Experience from './Experience'

const Resume = () => {

    const [educationData, setEducationData] = useState(true)
    const [skillsData, setSkillsData] = useState(false)
    const [experinceData, setExperinceData] = useState(false)
    const [achievementData, setAchievementData] = useState(false)

    const clickOnEducation = () => {
        setEducationData(true);
        setAchievementData(false);
        setExperinceData(false);
        setSkillsData(false)
    }
    const clickOnSkills = () => {
        setEducationData(false);
        setAchievementData(false);
        setExperinceData(false);
        setSkillsData(true)
    }
    const clickOnExperince = () => {
        setEducationData(false);
        setAchievementData(false);
        setExperinceData(true);
        setSkillsData(false)
    }
    const clickOnAchievemnt = () => {
        setEducationData(false);
        setAchievementData(true);
        setExperinceData(false);
        setSkillsData(false)
    }

    return (
        <section id='resume' className="w-full h-auto py-20  border-b-[px] border-b-black">
            <div className='flex justify-center items-center text-center '>
                <Title
                    title='2+ years of Experience'
                    des='My Resume' />
            </div>
            <div>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 '>
                    <li onClick={() => { clickOnEducation() }}
                        className={`${educationData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >Education</li>

                    <li onClick={() => { clickOnSkills() }}
                        className={`${skillsData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >Professional Skill</li>

                    <li onClick={() => { clickOnExperince() }}
                        className={`${experinceData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >Experience</li>

                    <li onClick={() => { clickOnAchievemnt() }}
                        className={`${achievementData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >Achievement</li>
                </ul>
            </div>
            {
                educationData && <Education />
            }
            {
                skillsData && <Skills />
            }
            {
                achievementData && <Achievement />
            }
            {
                experinceData && <Experience />
            }
        </section>
    )
}

export default Resume