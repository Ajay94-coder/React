import React, { useState } from 'react'

export default function ItemList() {
    const [items, setItems] = useState([]);
    function addItem(){
        setItems([...items, `Item ${items.length + 1}`]);
    }
  return (
    <div>
      {/* <h1>{items}</h1> */}
      <button onClick={addItem}  className='btn btn-danger my-3'>click me</button>
      <ul>
        {items.map((item,index)=>(
            <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}
