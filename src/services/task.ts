import { Task } from './../interface/task';
import * as TaskModel from "../model/task";

export function getAllTasks(){
    const data = TaskModel.getAllTasks();
    if (!data){
        return{
            err: ` task  not found`,
        }
    }
    return data;
};

export function getTaskById(id:number){
    const data = TaskModel.getTaskById(id);
    // if (!data){
    //     return{
    //         err: `data of task id: ${id} not found`,
    //     }
    // }
    return data;
};

export function addTask(task:Task){
    const data = TaskModel.addTask(task);
    return data;
}

export function updateTask(
    id:number,
    title?:string,
    completed?:boolean
){
    const task = getTaskById(id);
    if (!task) return null;
    if (title !== undefined) task.title = title;
    if(completed !== undefined) task.completed = completed;
    TaskModel.updateTaskById(id,task);
}

export function deleteTask(id:number){
    TaskModel.deleteTaskById(id);
}