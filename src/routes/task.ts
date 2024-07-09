import express from 'express';
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from '../controller/task';

const router = express();

router.get('/', getAllTasks);
router.get("/:id", getTaskById);
router.post("/",createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);


export default router;