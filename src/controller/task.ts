import { Request, Response } from "express";
import * as TaskService from "../services/task";

export function getAllTasks(req:Request, res:Response){
    const data = TaskService.getAllTasks();
    res.json(data);
};

export function getTaskById(req:Request, res:Response){
    const {id} = req.params;
    const data = TaskService.getTaskById(parseInt(id,10));
    res.json(data);
};

export function createTask(req:Request, res:Response){
    const { body } = req;
    console.log(body);
    
    const data = TaskService.addTask(body);
    res.json(data)
}
export function updateTask(req:Request, res:Response){
    const id = req.params.id;
    const {title, completed} = req.body;
    
    TaskService.updateTask(parseInt(id),title,completed);
    const data = TaskService.getAllTasks();
    res.json(data);
}

export function deleteTask(req:Request, res:Response){
    const id = req.params.id;
    TaskService.deleteTask(parseInt(id));
    const data = TaskService.getAllTasks();
    res.json(data);
}