import { useEffect, useState } from "react";
import axios from 'axios';
import { Input } from "./input.jsx";
import { EmptyTaskList } from "./EmptyTaskList.jsx";
import { DisplayTasks } from "./DisplayTasks.jsx";

export function App() {
    const [taskList,setTaskList] = useState([]);
    console.log("taskList = ",taskList);






  return (
    <>
      <Input></Input>
      <DisplayTasks></DisplayTasks>
      

    </>
  );
}
