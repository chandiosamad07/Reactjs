import React from 'react'
import Typed from 'react-typed'
const Banner = () => {
  return (
    <div className='bg-[rgb(38,153,251)] w-full py[100px]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' >
        <div className='text-xl md:text-3xl font-bold mt-4'>
            Learn with us
        </div>
        <h2 className='text-white font-bold text-3xl md:text-[60px] mt-4'>
            Grow with us.
        </h2>
        <div className='text-white text-[50px] font-bold mt-4'>
            Learn
            <Typed className='pl-3' 
            strings={['web Development', 'Digital Marketing','Ethical Hacking']}
            typeSpeed={100}
            loop= {true}
            backSpeed={120}
            />
        </div>
      </div>
    </div>
  )
}

export default Banner
