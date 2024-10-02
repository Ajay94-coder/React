//rfc
import React,{useState} from 'react'

export default function Component3() {
    const [isVisible,setIsVisible] = useState(true);//initial state is true 
    const toggleVisibility=()=>{
        setIsVisible(!isVisible);//Toggle state between true and flase
    }
  return (
    <div>
      <button onClick={toggleVisibility}>
      {isVisible ? 'Hide' : 'Show'} Text
      </button>
        {/* Conditionally render the <p> element */}
      {isVisible && <p>This is the text to toggle!</p>}
    </div>
  )
}
