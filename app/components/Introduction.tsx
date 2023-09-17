import React from 'react'

const Introduction = () => {
  return (
    <div className= 'w-full h-96'>
        <div className=" bg-[url('/images/introbackground.png')] grid grid-cols-2 gap-4 h-[600px]">
            <div className="col-span-1 w-full h-full">
                <p className='text-4xl font-semibold pl-44 pt-10'>
                Dojii utilizes AI and ML for a new and improved way to predict stock prices
                </p>
                <p className='pl-44 pt-2'>
                aefawe afwe wenae fwe ef a s d f a a a a a a a a a a a a a a a
                </p>
            </div>

            <div className="col-span-1 h-full">
                <div className='flex justify-center items-center'>
                    <img src="/images/dojiiintro.png" alt="Image 1" className=' w-[700px] h-[520px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction