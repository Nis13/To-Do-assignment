import { Task } from "../interface/task";

const tasks = [
    {
        id: 1,
        title: "task 1",
        completed: false
    }
]

export function getAllTasks(){
    return tasks;
}
export function getTaskById(id:number){
    return tasks.find(({id:taskId})=>taskId === id);
};

export function addTask(task:Task){
    tasks.push(
        {
            id: tasks[tasks.length-1].id +1,
            ...task
        }
    )
    return tasks;
}

export function updateTaskById(id:number,task:Task){
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex != -1){
        tasks[taskIndex] =  {id,...task};
    }
}

export function deleteTaskById(id:number){
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex != -1){
        tasks.splice(taskIndex,1);
    }
}