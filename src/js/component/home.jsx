import React,{useState} from "react";
import {List} from "./list.jsx"
import{ListInput} from "./listInput.jsx"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [toDoList,setToDoList] = useState([
		{
		label:"take out Trash",
		done:false
	},
	{
		label:"feed the dog",
		done:false
	}
])
	return (
		<div className="text-center">
			<h1>todos</h1>
<ListInput toDoList = {toDoList} setToDoList={setToDoList}/>
	 <List toDoList = {toDoList} setToDoList={setToDoList}/>		
		</div>
	);
};

export default Home;
