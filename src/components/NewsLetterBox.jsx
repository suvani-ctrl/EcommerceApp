import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault()
    // handle email submission logic here
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now and get 20% off
      </p>
      <p className='text-gray-400 mt-3'>
        Join our newsletter to get exclusive deals, tips, and updates delivered to your inbox.
      </p>
      <form 
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto mt-6'
      >
        <input
          className='w-full sm:flex-1 outline-none border border-gray-300 px-4 py-3 rounded'
          type='email'
          placeholder='Enter your email'
          required
        />
        <button 
          type='submit' 
          className='bg-black text-white text-xs px-6 py-3 rounded'
        >
          SUBSCRIBE
        </button> 
      </form>
    </div>
  )
}

export default NewsLetterBox
