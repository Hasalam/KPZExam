import { useRef, useContext } from "react";
import TasksContext from "../store/tasks-context";
function SearchRow() {
    const tasksCtx = useContext(TasksContext);
    const titleInputRef = useRef();
    const textInputRef = useRef();
  function searchHandler() {
    fetch("https://localhost:7237/Tasks/GetAllTasks")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            if(titleInputRef.current.value !="")
            {
                data=data.filter(task=>task.title.includes(titleInputRef.current.value));
            }
            if(textInputRef.current.value !="")
            {
                data=data.filter(task=>task.text.includes(textInputRef.current.value));
            }
            tasksCtx.addTask(data);
        });
  }

  return (
    <tr>
      <td>
        <input name="title" ref={titleInputRef}></input>
      </td>
      <td>
        <input name="text" ref={textInputRef}></input>
      </td>
      <td>
        <button onClick={searchHandler}>Search</button>
      </td>
    </tr>
  );
}

export default SearchRow;