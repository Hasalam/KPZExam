import { createContext,useState } from "react";

const TasksContext = createContext({
    tasks:[],
    addTask:(userTasks)=>{}
});

export function TasksContextProvider(props)
{
    const[userTasks,setUserTasks] = useState();
    function addTaskHandler(userTasks) {
        setUserTasks(()=>{
            return userTasks;
        });
    }

    const context={
        tasks : userTasks,
        addTask : addTaskHandler
    };

    return <TasksContext.Provider value={context}>
        {props.children}
    </TasksContext.Provider>
}

export default TasksContext;