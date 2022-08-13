import { Router } from "express";
import { create, getAll } from "../controller/task.controller";

const router = Router();

router.post('/', create);
router.get('/', getAll);
