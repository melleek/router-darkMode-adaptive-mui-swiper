import React from 'react'

function Card({img, p, h1, str}) {
  return (
    <div className='lg:m-[25px] flex flex-col items-start gap-[10px] sm:m-[45px] dark:text-white'>
      <img src={img} alt="" />
      <p className='text-[#6C6C6C]'>{p}</p>
      <h1>{h1}</h1>
      <img src={str} alt="" />
    </div>
  )
}

export default Card
