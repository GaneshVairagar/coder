import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>
            Academia &  <span className='text-yellow-400'>Expertise</span>
        </h1>

        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            
            <div>
                <SkillsItem title="Seed Infotech Training" year="Pune 2023 - 2024"/>
            </div>

            <div>
                <SkillsItem title="Bachelor's Of Engg.(IT)" year="SPPU 2019 - 2023"/>
            </div>

            <div>
                <SkillsItem title="HSC (12th)" year="MSBTE 2018 - 2019"/>
            </div>

            <div>
                <SkillsItem title="SSC (10th)" year="MSBTE 2016 - 2017"/>
            </div>

            <div>
                <SkillsLanguage 
                    skill1="HTML" 
                    skill2="CSS" 
                    skill3="Javascript"
                    level1="w-[91%]"
                     level2="w-[88%]"
                      level3="w-[80%]"
                />
            </div>

            <div>
                <SkillsLanguage 
                    skill1="Java" 
                    skill2="SpringBoot" 
                    skill3="ReactJs"
                    level1="w-[91%]"
                     level2="w-[88%]"
                      level3="w-[80%]"
                />
            </div>

              
        </div>

        
    </div>
  )
}

export default Skills