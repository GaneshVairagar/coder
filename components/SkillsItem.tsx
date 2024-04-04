import React from 'react'


interface Props{
    title:string
    year:string
}

const SkillsItem = ({title, year}: Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
        <span className='px-[2rem] text-[#00ffff] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#00ffff]'>
            {year}
        </span>
        <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>{title}</h1>

        <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
        I have a great learning experience with this University. Because of this University I got hold on
         my career track and got opportunity to work with IT Industry.
        </p>
    </div>
  )
}

export default SkillsItem