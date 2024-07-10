import { Request, Response } from "express";
import * as TaskService from "../service/task";

export function getAllTasks(req:any, res:Response){
    const userId = req.user.id;
    const data = TaskService.getAllTasks(userId);
    res.json(data);
};

export function getTaskById(req:any, res:Response){
    const userId = req.user.id;
    const {id} = req.params;
    const data = TaskService.getTaskById(parseInt(id,10),userId);
    res.json(data);
};

export function createTask(req:any, res:Response){
    const userId = req.user.id;
    const { body } = req;
    console.log(body);
    
    const data = TaskService.addTask(body,userId);
    res.json(data)
}
export function updateTask(req:any, res:Response){
    const userId = req.user.id;
    const id = req.params.id;
    const {title, completed} = req.body;
    
    const data = TaskService.updateTask(parseInt(id),title,completed,userId);
    res.json(data);
}

export function deleteTask(req:any, res:Response){
    const userId = req.user.id;
    const id = req.params.id;
    TaskService.deleteTask(parseInt(id),userId);
    const data = TaskService.getAllTasks(userId);
    res.json(data);
}