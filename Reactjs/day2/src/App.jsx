import './App.css'
import { useState } from "react";
import { useForm } from "react-hook-form";


function App() {
  const [tasks, setTask] = useState([
  ]);

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

  function addNewTask({ task: taskName }) {
    setTask([...tasks, { id: Math.floor((Math.random() * 100)), name: taskName, complete: false }])
  }

  function completeTask(index) {
    let tasksTemp = [...tasks];
    console.log(tasksTemp[index]);
    tasksTemp[index].complete = !tasksTemp[index].complete;
    console.log(tasksTemp[index]);
    setTask(tasksTemp);

  }

  function deleteTask(index) {
    let tskTemp = [...tasks]
    tskTemp.splice(index, 1);
    setTask(tskTemp);
  }
  return (
    <>
      <div className="text-bg-primary container rounded-5 p-5 mt-5">
        <h1>To-Do App!</h1>
        <p>Add New To-Do</p>
        <form onSubmit={handleSubmit(addNewTask)}>
          <input {...register("task", { required: true })} type="text" placeholder="Enter New Task" className="form-control my-4" />
          {errors.task && <p className="text-danger">You need to add task name.</p>}
          <button className="btn btn-outline-light">Add</button>
        </form>
      </div>
      <div className="container">
        <div className="row">
          <p className="col-12 text-center">Let&apos;s get some work done!</p>
          {
            tasks.map((task, i) => {
              return <div key={task.id} className="d-flex justify-content-evenly my-3">
                <button className="btn btn-success rounded-0" onClick={() => { completeTask(i) }}>Complete</button>
                <button className="btn btn-danger rounded-0" onClick={() => { deleteTask(i) }}>Delete</button>
                <h1 className={(task.complete) ? "text-decoration-line-through" : ""}>{task.name}</h1>
              </div>
            })}
        </div>
      </div>
    </>
  )
}

export default App;
