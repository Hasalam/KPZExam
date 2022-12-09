import {useRef , useContext} from 'react';
import TasksContext from '../store/tasks-context';
import '../add.css'
function AddTaskForm() {
    var tasksCtx = useContext(TasksContext);

    const titleInputRef = useRef();
    const textInputRef = useRef();
    const statusInputRef = useRef();
    const priorityInputRef = useRef();
    const timeInputRef = useRef();
    function submitHandler(event)
    {
        event.preventDefault();
        const title = titleInputRef.current.value;
        const text = textInputRef.current.value;
        const status = statusInputRef.current.value;
        const priority = priorityInputRef.current.value;
        const time = timeInputRef.current.value; 
        const newTask ={
            Id:0,
            Text: text,
            Title: title,
            Status: parseInt(status),
            Priority: parseInt(priority),
            Time:parseFloat(time)
        }
        fetch('https://localhost:7237/Tasks/AddTask',
        {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers:{
                'Content-Type': 'application/json',
                'accept': 'text/plain'
            }
        }).then((response) => {
            return response.json();
          })
          .then((data) => {
            tasksCtx.addTask(data);
          });
    }

  return (
    <section>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input id="title" ref={titleInputRef}></input>
        <label htmlFor="text">Text</label>
        <textarea id="text" ref={textInputRef}></textarea>
        <label htmlFor="status">Status</label>
        <select id="status" ref={statusInputRef}>
          <option value="0">New</option>
          <option value="1">Developing</option>
          <option value="2">Testing</option>
          <option value="3">Finished</option>
        </select>
        <label htmlFor="priority">Priority</label>
        <select id="priority" ref={priorityInputRef}>
          <option value="0">High</option>
          <option value="1">Medium</option>
          <option value="2">Low</option>
        </select>
        <label htmlFor="time">Time</label>
        <input id="time" ref={timeInputRef}></input>
        <button>Add Task</button>
      </form>
    </section>
  );
}

export default AddTaskForm;
