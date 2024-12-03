import React from 'react'
import Child from '@/component/Child1'
const Parent = () => {
let name='Sheharyar Khan'
let name1='Jawwad Ali'
let name2='Babar Azam'
    

  return (
    <div>
    <Child name={name}/>
    <Child name={name1}/>
    <Child name={name2}/>
    </div>
  )
}

export default Parent