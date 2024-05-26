import { useState } from "react"



function ToDoListApp () { 

    const [tasks, setTasks] = useState ([]); 
    

    function handleClickAdd() {
        const taskInput = document.getElementById("task-input").value
        document.getElementById("task-input").value = ""


        taskInput && setTasks(t => [...t, taskInput])

         
    }
    

    function handleClickDelete(index) { 
        setTasks(t => t.filter((_, i) => i !== index ));
        
    }

    function handleClickUp(index) {

        if (index > 0) { 
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]

            setTasks(updatedTasks);
        }
    }

    function handleClickDown(index) { 

        if (index < tasks.length - 1) { 
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]

            setTasks(updatedTasks);
        }

    }




    return(
        <>
        <div className="container">
                <h1>To-Do List App</h1>
                <div className="input-area">
                    <input 
                        type="text" 
                        id="task-input"
                        // value={tasks}
                        // onChange={()=>handleInputChange(event)}
                        placeholder="Enter a Task" />
                    <button onClick={handleClickAdd} >Add task</button>
                </div>
                <ol>
                    {tasks.map((task,index) => 
                        <li
                            key={index}
                            style={{listStyleType:"none"}}
                        >   <span className="li-input">{task}</span>
                            <div className="li-button" >
                                <button className="del-button" onClick={()=>handleClickDelete(index)} >DEL</button>
                                <button className="up-button" onClick={()=>handleClickUp(index)}>UP</button>
                                <button className="down-button" onClick={()=>handleClickDown(index)} >DOWN</button>
                            </div>
                        </li> 
                    )}
                </ol>
        </div>

        </>
    )
}

export default ToDoListApp