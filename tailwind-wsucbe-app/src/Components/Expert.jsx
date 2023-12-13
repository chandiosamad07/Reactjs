import React from 'react'

const Expert = () => {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2'>
     <div className=' col-span-1 w-[80%]'>
    <img src="./laptop.jpg" alt="" />
     </div>
     <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    
  )
}

export default Expert
