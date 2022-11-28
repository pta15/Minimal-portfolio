import React from 'react'
import resume from '../assets/Resume.pdf'

function Intro() {
  return (
    <section id="intro" className='flex items-center justify-center flex-col pt-20 pb-6'>
        <div className='text-center'>
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
                Abdihafid Abdirahman
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Software engineer and web developer
            </p>
            <p className="text-sm max-w-x1 mb-6 font-bold">
            Independent and innovative computer science graduate with a diverse 
            and promising skillset. Capable of working in a fast-paced and demanding 
            environment. Able to effectively self-manage during independent 
            projects while also being able to collaborate in a team setting.
            <br/><a classname="" href={resume} download target="_blank">Click this for my cv</a>
            </p>
        </div>
    </section>
  )
}

export default Intro
