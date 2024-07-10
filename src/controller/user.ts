import { query, Request, Response } from "express";
import * as UserService from '../service/user';
import { GetUserQuery } from "../interface/user";

export function getUsers(req: Request<any,any,any,GetUserQuery>, res: Response) {
        const {query} = req;
        const data = UserService.getUsers(query);
        res.json(data)
};

export function getUserById(req: Request, res: Response){
    const {id} = req.params;
    const data = UserService.getUserById(parseInt(id));
    res.json(data);

};

export async function createUser(req:Request, res:Response){
    const { body } = req;
    console.log(body);
    
    const data = await UserService.createUser(body);
    const { password, ...publicUser } = data;
    res.json(publicUser)
  
}