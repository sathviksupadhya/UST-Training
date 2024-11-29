import { useState } from "react";

export default function TodoList() {
    const [allTasks, setAllTasks] = useState([
        {
            taskId: 101,
            taskName: "Call Friend",
            isTaskCompleted: false,
        },
        {
            taskId: 102,
            taskName: "Prepare Dinner",
            isTaskCompleted: false,
        },
    ]);
    const [newTaskName, setNewTaskName] = useState(""); // State for new task input

    // Mapping tasks to list items
    let mappedAllTasks = allTasks.map((eachTask) => (
        <li
            key={eachTask.taskId}
            className="list-group-item"
            onClick={() => handleAToggleTask(eachTask.taskId)}
        >
            {eachTask.taskName} {eachTask.isTaskCompleted ? "✔️" : ""}
            <button
                className="btn btn-warning ml-2"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent onClick event of li from triggering
                    deleteTask(eachTask.taskId);
                }}
            >
                🗑️
            </button>
        </li>
    ));

    // Function to toggle task completion status
    function handleAToggleTask(taskId) {
        const updatedTasks = allTasks.map((eachTask) => {
            if (eachTask.taskId === taskId) {
                return { ...eachTask, isTaskCompleted: !eachTask.isTaskCompleted };
            }
            return eachTask;
        });
        setAllTasks(updatedTasks);
    }

    // Function to delete a task
    function deleteTask(taskId) {
        const updatedTasks = allTasks.filter((eachTask) => eachTask.taskId !== taskId);
        setAllTasks(updatedTasks);
    }

    // Function to add a new task
    function addNewTask() {
        if (newTaskName.trim() === "") return; // Prevent adding empty tasks
        const newTask = {
            taskId: allTasks.length + 101, // Generate a unique ID for the new task
            taskName: newTaskName,
            isTaskCompleted: false,
        };
        setAllTasks([...allTasks, newTask]);
        setNewTaskName(""); // Clear the input after adding
    }

    // Function to handle Enter key press
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addNewTask();
        }
    }

    return (
        <>
            <div className="container m-5">
                <h3>TODO APP</h3>

                {/* Input for adding new tasks */}
                <div className="mt-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add a new task"
                        value={newTaskName}
                        onChange={(e) => setNewTaskName(e.target.value)}
                        onKeyDown={handleKeyDown} // Call addNewTask on Enter
                    />
                </div>

                {/* List of available tasks */}
                <ul className="list-group mt-3">{mappedAllTasks}</ul>
            </div>
        </>
    );
}
