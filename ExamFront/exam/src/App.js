import AddTaskForm from "./components/AddTaskForm";
import TasksList from "./components/TasksList";
import "./App.css"
function App() {
  return (
    <div className="mainDiv">
        <div className="fifty">
        <h1>Tasks</h1>
          <TasksList />
        </div>
        <div className="fifty">
          <h1>Add Tasks</h1>
          <AddTaskForm />
        </div>
    </div>
  );
}

export default App;
