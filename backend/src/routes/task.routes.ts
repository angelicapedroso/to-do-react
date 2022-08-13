import { Router } from "express";
import { create, getAll, update } from "../controller/task.controller";

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.put('/:id', update);

export default router;
