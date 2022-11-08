import React from 'react'
import portfolio from '../data/portfolio'
import portfolioItem from './portfolioItem'


function Portfolio() {
  return (    
    <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <a className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden" href="./blank">
                <img src="https://via.placeholder.com/350x150" alt="portfolio" className='w-full h-36 md:h-48 object-cover cursor-pointer'/>
                <div className="w-full p-4">
                    <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white'>
                        Portfolio website
                    </h3>
                    <p className='flex flex-wrap gap-2 flex-row items-center dark:text-white justify-start text-xs md:text-sm '>

                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        HTML
                    </span>
                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        CSS
                    </span>
                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        Javascript
                    </span>
        
                    </p>
                </div>
            </a>
            <a className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden" href="./blank">
                <img src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg" alt="portfolio" className='w-full h-36 md:h-48 object-cover cursor-pointer'
                />
                <div className="w-full p-4">
                    <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white'>
                        Portfolio website
                    </h3>
                    <p className='flex flex-wrap gap-2 flex-row items-center dark:text-white justify-start text-xs md:text-sm '>

                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        HTML
                    </span>
                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        CSS
                    </span>
                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        Javascript
                    </span>
        
                    </p>
                </div>
            </a>
            <a className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden" href="./blank">
                <img src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg" alt="portfolio" className='w-full h-36 md:h-48 object-cover cursor-pointer'
                />
                <div className="w-full p-4">
                    <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white'>
                        Portfolio website
                    </h3>
                    <p className='flex flex-wrap gap-2 flex-row items-center dark:text-white justify-start text-xs md:text-sm '>

                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        HTML
                    </span>
                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        CSS
                    </span>
                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        Javascript
                    </span>
        
                    </p>
                </div>
            </a>
            <a className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden" href="./blank">
                <img src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg" alt="portfolio" className='w-full h-36 md:h-48 object-cover cursor-pointer'
                />
                <div className="w-full p-4">
                    <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white'>
                        Portfolio website
                    </h3>
                    <p className='flex flex-wrap gap-2 flex-row items-center dark:text-white justify-start text-xs md:text-sm '>

                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        HTML
                    </span>
                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        CSS
                    </span>
                    <span key = 'css' className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        Javascript
                    </span>
        
                    </p>
                </div> 
            </a>
            {/*{portfolio.map(project =>(
                <portfolioItem 
                key={project.title} 
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                projectUrl={project.projectUrl}
                />
            ))}*/}
        </div>
    </div>
  )
}

export default Portfolio
