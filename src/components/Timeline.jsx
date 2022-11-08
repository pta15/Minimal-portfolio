import React from 'react';
import timeline from '../data/timeline';
import timelineItem from './timelineItem';


function Timeline() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
        <div className='w-7/12'>
            <h1 className="text-2x1 font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white">Timeline</h1>
            <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                    <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                        <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                            2019
                        </span>
                        <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>
                            yada
                        </h3>
                        <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>
                            2 years
                        </div>
                    </p>
                    <p className='my-2 text-base font-normal text-stone-500 dark:text-stone-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue sem, mollis sed dictum eget, eleifend eget est. Fusce at nulla id dui elementum hendrerit cursus quis ligula. Ut id luctus massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </li>
            </ol>
            <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                    <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                        <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                            2019
                        </span>
                        <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>
                            yada
                        </h3>
                        <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>
                            2 years
                        </div>
                    </p>
                    <p className='my-2 text-base font-normal text-stone-500 dark:text-stone-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue sem, mollis sed dictum eget, eleifend eget est. Fusce at nulla id dui elementum hendrerit cursus quis ligula. Ut id luctus massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </li>
            </ol>
            <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                    <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                        <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                            2019
                        </span>
                        <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>
                            yada
                        </h3>
                        <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>
                            2 years
                        </div>
                    </p>
                    <p className='my-2 text-base font-normal text-stone-500 dark:text-stone-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue sem, mollis sed dictum eget, eleifend eget est. Fusce at nulla id dui elementum hendrerit cursus quis ligula. Ut id luctus massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </li>
            </ol>
            <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                    <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                        <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                            2019
                        </span>
                        <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>
                            yada
                        </h3>
                        <div className='my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'>
                            2 years
                        </div>
                    </p>
                    <p className='my-2 text-base font-normal text-stone-500 dark:text-stone-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue sem, mollis sed dictum eget, eleifend eget est. Fusce at nulla id dui elementum hendrerit cursus quis ligula. Ut id luctus massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </li>
            </ol>
            {/* {timeline.map(item => (
                <timelineItem
                    key ={item.title}
                    year = {item.year}
                    title ={item.title}
                    duration = {item.duration}
                    details ={item.details} />
            ))} */}
        </div>
    </div>
  )
}

export default Timeline;
