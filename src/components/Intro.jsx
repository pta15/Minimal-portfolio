import React from 'react'

function Intro() {
  return (
    <section id="intro" className='flex items-center justify-center flex-col pt-20 pb-6'>
        <div className='text-center'>
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
                Abdihafid
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Software engineer and web developer {' '}
            </p>
            <p className="text-sm max-w-x1 mb-6 font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue sem, mollis sed dictum eget, eleifend eget est. Fusce at nulla id dui elementum hendrerit cursus quis ligula. Ut id luctus massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi quis leo sed massa dictum maximus eget quis erat. Sed eget viverra ex. Proin eleifend ultrices nisi, quis laoreet neque faucibus id. Cras lectus massa, eleifend ut magna id, finibus imperdiet lectus. Morbi tincidunt metus non lacus commodo semper.
            </p>
        </div>
    </section>
  )
}

export default Intro
