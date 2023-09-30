import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Achievement from './Achievement'
import Experience from './Experience'
import SE from './SE'

const Resume = () => {

    const [educationData, setEducationData] = useState(true)
    const [itData, setItData] = useState(false)
    const [skillsData, setSkillsData] = useState(false)
    const [experinceData, setExperinceData] = useState(false)
    const [achievementData, setAchievementData] = useState(false)

    const clickOnEducation = () => {
        setEducationData(true);
        setAchievementData(false);
        setExperinceData(false);
        setSkillsData(false)
        setItData(false)
    }
    const clickOnIt = () => {
        setEducationData(false);
        setAchievementData(false);
        setExperinceData(false);
        setSkillsData(false)
        setItData(true)
    }
    const clickOnSkills = () => {
        setEducationData(false);
        setAchievementData(false);
        setExperinceData(false);
        setSkillsData(true)
        setItData(false)
    }
    const clickOnExperince = () => {
        setEducationData(false);
        setAchievementData(false);
        setExperinceData(true);
        setSkillsData(false)
        setItData(false)
    }
    const clickOnAchievemnt = () => {
        setEducationData(false);
        setAchievementData(true);
        setExperinceData(false);
        setSkillsData(false)
        setItData(false)
    }

    return (
        <section id='resume' className="w-full h-auto py-20  border-b-[px] border-b-black">
            <div className='flex justify-center items-center text-center '>
                <Title
                    title='2+ years of Experience'
                    des='My Resume' />
            </div>
            <div>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-5 '>
                    <li onClick={() => { clickOnEducation() }}
                        className={`${educationData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >Education</li>

                    <li onClick={() => { clickOnIt() }}
                        className={`${itData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >SE Qlification</li>
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
                                itData && <SE/>
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