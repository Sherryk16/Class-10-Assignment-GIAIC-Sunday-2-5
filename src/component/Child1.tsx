import React from 'react'

const page = (props:any) => {
  console.log(props)
  return (
  <div>
    <h1 className='text-7xl'>{props.name}</h1>
    <h1 className='text-7xl'>{props.name1}</h1>
    <h1 className='text-7xl'>{props.name2}</h1>
  </div>
  )
}

export default page