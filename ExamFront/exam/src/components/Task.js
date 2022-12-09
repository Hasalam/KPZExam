import {useRef , useContext} from 'react';
import TasksContext from '../store/tasks-context'
function Task(props) {
    var tasksCtx = useContext(TasksContext);
  function deleteHandler() {
    fetch("https://localhost:7237/Tasks/DeleteTask/" + props.id, {
      method: "DELETE",
    }).then((response) => {
        return response.json();
      })
      .then((data) => {
        tasksCtx.addTask(data);
      });
  }
  const titleInputRef = useRef();
  const textInputRef = useRef();
  const statusInputRef = useRef();
  const priorityInputRef = useRef();
  const timeInputRef = useRef();
  function changeHandler() {
    const title = titleInputRef.current.value;
    const text = textInputRef.current.value;
    const status = statusInputRef.current.value;
    const priority = priorityInputRef.current.value;
    const time = timeInputRef.current.value;
    const task = {
      Id: parseInt(props.id),
      Text: text,
      Title: title,
      Status: parseInt(status),
      Priority: parseInt(priority),
      Time: parseFloat(time),
    };
    fetch("https://localhost:7237/Tasks/EditTask", {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
        accept: "text/plain",
      },
    }).then((response) => {
        return response.json();
      })
      .then((data) => {
        tasksCtx.addTask(data);
      });
  }

  return (
    <tr key={props.id} id={props.id}>
      <td>
        <input defaultValue={props.title} ref={titleInputRef}></input>
      </td>
      <td>
        <textarea defaultValue={props.text} ref={textInputRef}></textarea>
      </td>
      <td>
        <select id="status" defaultValue={props.status} ref={statusInputRef}>
          <option value="0">New</option>
          <option value="1">Developing</option>
          <option value="2">Testing</option>
          <option value="3">Finished</option>
        </select>
      </td>
      <td>
        <select id="priority" defaultValue={props.priority} ref={priorityInputRef}>
          <option value="0">High</option>
          <option value="1">Medium</option>
          <option value="2">Low</option>
        </select>
      </td>
      <td>
        <input id="time" defaultValue={props.time} ref={timeInputRef}></input>
      </td>
      <td>
        <button onClick={deleteHandler}>Delete</button>
      </td>
      <td>
        <button onClick={changeHandler}>Change</button>
      </td>
    </tr>
  );
}

export default Task;
