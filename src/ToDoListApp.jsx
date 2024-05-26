import { useEffect, useState } from "react"



function ToDoListApp () { 

    const [tasks, setTasks] = useState (["Workout", "Code", "Basketball"]); 
    const [color, setColor] = useState()


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

    function handleClickFinish () {
        setColor ('#2f2f2f'); // I don't know how to change the bgcolor of the certain item only
      };


    return(
        <>
        <div className="container">
                <h1>To-Do List App</h1>
                <div className="input-area">
                    <input 
                        type="text" 
                        id="task-input"
                        placeholder="Enter a Task" />
                    <button onClick={handleClickAdd} >Add task</button>
                </div>
                <ol>
                    {tasks.map((task,index) => 
                        <li
                            key={index}
                            style={{listStyleType:"none", backgroundColor:color}}
                        >   <span className="li-input">{task}</span>
                            <div className="li-button" >
                                <button className="del-button" onClick={()=>handleClickDelete(index)} >DEL</button>
                                <button className="up-button" onClick={()=>handleClickUp(index)}>UP</button>
                                <button className="down-button" onClick={()=>handleClickDown(index)} >DOWN</button>
                                <button className="finish-button" onClick={()=>handleClickFinish()} >DONE</button>
                            </div>
                        </li> 
                    )}
                </ol>
        </div>

        </>
    )
}

export default ToDoListApp