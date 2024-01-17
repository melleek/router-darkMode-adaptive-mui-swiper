import React from 'react'

function Card1({img, h1, p}) {
  return (
    <div className='flex flex-col items-center gap-[15px]'>
        <img src={img} alt="" />
        <h1>{h1}</h1>
        <p>{p}</p>
    </div>  
  )
}

export default Card1
