import { Router } from 'express';
import {
  create, destroy, getAll, update,
} from '../controller/task.controller';

const router = Router();

router.post('/', create);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;
