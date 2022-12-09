import { useState, useEffect, useContext } from "react";
import TasksContext from "../store/tasks-context";
import Task from "./Task";
import SearchRow from "./SearchRow";
function TasksList() {
    const tasksCtx = useContext(TasksContext);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTasks,setLoadedTasks] = useState([]);

    useEffect(() => {
      setIsLoading(true);
      if(tasksCtx.tasks === undefined)
      {
        
      fetch("https://localhost:7237/Tasks/GetAllTasks")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setLoadedTasks(data);
        });
      }else
      {
        setLoadedTasks(tasksCtx.tasks);
        setIsLoading(false);
      }
    },[tasksCtx.tasks]);

  

  if (!isLoading) {
    return (
      <section>
        <table>
          <SearchRow/>
        {loadedTasks.map((task) => {
          return (
            <Task
              id={task.id}
              title={task.title}
              text={task.text}
              status={task.status}
              priority={task.priority}
              time={task.time}
            />
          );
        })}
        </table>
      </section>
    );
  }
}

export default TasksList;
