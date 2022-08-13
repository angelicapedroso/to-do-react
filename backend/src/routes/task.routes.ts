import { Router } from "express";
import { create } from "../controller/task.controller";

const router = Router();

router.post('/', create);
