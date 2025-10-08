import { useEffect, useState } from "react";
import axios from 'axios';
import { Input } from "./input.jsx";
import { EmptyTaskList } from "./EmptyTaskList.jsx";
import { DisplayTasks } from "./DisplayTasks.jsx";

export function App() {
    const [taskList,setTaskList] = useState([]);
    console.log("taskList = ",taskList);


    // on pageRefresh/firstRender data backend se laarhe
    function handleGettingAllItemsFromDB(){
        axios.get("http://localhost:4000")
        .then(function(response){
            console.log("response = ",response);
            setTaskList(response.data);
        })
        .catch(function(error){
            console.log("error(frontend) = ",error)
        })
    }
    useEffect( ()=>{
        handleGettingAllItemsFromDB();
    },[])


    function handleAddingAnItemIntoDB(title,description){
        axios.post("http://localhost:4000",{
            title,
            description
        })
        .then(function(response){
            console.log("response = ",response);
            alert(response.data)
            handleGettingAllItemsFromDB();
        })
        .catch(function(error){
            console.log("error = ",error);
        })
    }

  return (
    <>
      <Input addingAnItemIntoDB={handleAddingAnItemIntoDB}></Input>
      {taskList.length === 0 && <EmptyTaskList></EmptyTaskList>}
      {taskList.length > 0 && taskList.map( (item)=>{
        return <DisplayTasks key={item.id} {...item}></DisplayTasks>
      })}
    </>
  );
}
