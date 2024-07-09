import express from 'express';
import taskRouter from "./task";

const router = express();

router.use('/tasks', taskRouter);


export default router;