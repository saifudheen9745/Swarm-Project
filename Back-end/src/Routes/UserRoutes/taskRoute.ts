import express from 'express';
const router = express.Router();
import { addNewTask, getAllTask,updateTaskStatus,addComments,getAllComments,deleteTask } from '../../Controllers/UserControllers/taskControllers';


router.get('/:projectId',getAllTask)
router.delete('/:taskId',deleteTask)
router.get('/comments/:taskId',getAllComments)
router.post('/create',addNewTask)
router.patch('/updatestatus',updateTaskStatus)
router.post('/addcomments',addComments)
export default router;