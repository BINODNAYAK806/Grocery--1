import React from 'react'

export const GroceryList = ({title,id,status,handleDelet,handTog,togC}) => {
  return (
    <div>
          <p>{`${title} -${status}`}</p>
        {/* <button onClick={()=>{handTog(id)}} >Alert id</button> */}
        {/* <p>{id}</p> */}
        
        <button onClick={()=>{handleDelet(id)}}>delete</button>
    </div>

  )
}
