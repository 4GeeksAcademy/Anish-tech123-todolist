import React, { useState } from "react"

export const ListInput=({toDoList, setToDoList})=>{
    const [inputValue, setInputValue] =useState("")
    const addToDo = (e)=>{
        if (e.key=="Enter"&& inputValue!=""){
            let newList = toDoList.concat({
                label:inputValue,
                done:false
            }) 
            setToDoList(newList)
            setInputValue("") 
        }
    }
    return(
        <div>
            <input value={inputValue}onChange={e=>setInputValue(e.target.value)} onKeyDown={e=>addToDo(e)}/>
        </div>
    )
}