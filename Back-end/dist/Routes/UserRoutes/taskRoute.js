"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const taskControllers_1 = require("../../Controllers/UserControllers/taskControllers");
router.get('/:projectId', taskControllers_1.getAllTask);
router.delete('/:taskId', taskControllers_1.deleteTask);
router.get('/comments/:taskId', taskControllers_1.getAllComments);
router.post('/create', taskControllers_1.addNewTask);
router.patch('/updatestatus', taskControllers_1.updateTaskStatus);
router.post('/addcomments', taskControllers_1.addComments);
exports.default = router;
//# sourceMappingURL=taskRoute.js.map