import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className="flex justify-center">
        <form action="https://getform.io/f/7a900174-6dde-49c8-a338-930a7ff76d0e" 
        method="POST"
        className="flex flex-col w-full md:w-7/12">
          <h1 class="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white ">Contact</h1>
          <input type="text" name="name" placeholder="Name" class="p-2 bg-transparent border-2 rounded-md border-gray-300 focus:outline-none"/>
          <input type="text" name="e-mail" placeholder="e-mail" class="my-2 p-2 bg-transparent border-2 rounded-md border-gray-300 focus:outline-none"/>
          <textarea name="message" placeholder="Message" rows="10" class="p-2 mb-4 bg-transparent border-2 rounded-md border-gray-300 focus:outline-none"/>
          <button type="submit" class="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white">Send message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
