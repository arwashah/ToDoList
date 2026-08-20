import { useState } from "react"


 

function ToDoList(){
    const[tasks, setTasks] = useState([]);
    const[newTask, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);

    }

    function addTasks(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t,newTask]);
            setNewTasks("");
    }

    }

    function removeTasks(index){
        const updatedTask = tasks.filter((_, i ) => i !== index);
        setTasks(updatedTask);


    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index -1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index -1]] = [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
    }


    return (<div className="todolist">
        <h1>To-Do-List</h1>
        <div>
            <input type= "text" placeholder="Enter a task.." value={newTasks} onChange={handleInputChange}/>
            <button className="addbutton" onClick ={addTasks}>Add ✅</button>
        </div>
        <ol>
            {tasks.map((task, index ) => <li key={index}><span className="text">{task}</span></li>)}
            <button className="deletebutton" onClick ={ () => removeTasks(index)}>Delete ❌</button>
            <button className ="move" onClick ={ () => moveTaskUp(index)}>⬆️</button>
            <button className ="move" onClick ={ () => moveTaskDown(index)}>⬇️</button>

        </ol>
    </div>);


}
export default ToDoList