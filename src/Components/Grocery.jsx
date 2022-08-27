import React from 'react'
import { GroceryInput } from './GroceryInput'
import { GroceryList } from './GroceryList'
import {v4 as uuid} from "uuid"

export const Grocery = () => {

    const [data, setData] = React.useState([])

    const handleAdd =(title)=>{

        const paylode = {

            title,
            status : false,
            id : uuid()

        }
        setData([...data,paylode])
        
        
    }
    const handleDelet=(id)=>{

        const updatedata = data.filter((item) =>
        item.id !== id
        )
        setData(updatedata)


    }

  return (
    <div>
       <GroceryInput onClick={handleAdd}/>
        {data.map((item)=>(
        <GroceryList
        handleDelet={handleDelet}
        
        {...item}/>
        ))}
   
    </div>
  )
}
