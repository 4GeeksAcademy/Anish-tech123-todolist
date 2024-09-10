import React, { useState } from"react"

export const List = ({toDoList,setToDoList})=>{
    const deleteToDo = (index)=>{
        let newList = toDoList.filter((item,idx)=>idx!=index)
        setToDoList(newList)
    }
    const[hovered,setHovered] = useState(null)
    return (
        <ul className="list-group w-50 mx-auto mt-5">
                {toDoList.map((item,index)=>{
                    return(
                        <li onMouseEnter={()=>setHovered(index)} onMouseLeave={()=>setHovered(null)} className="list-group-item">
                            {item.label}
                            <button onClick={()=> deleteToDo(index)} className={`btn ${hovered==index?"":"hidden"}`} ><i className="fa-solid fa-trash-can"></i></button>
                        </li>
                    )
                })}
                <li className = "list-group-item">{toDoList.length==0?"No tasks, add a task": toDoList.length==1?"1 item left":toDoList.length+" items left"}</li>
        </ul> 
    )
}