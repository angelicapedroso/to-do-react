import { Router } from 'express';
import * as controller from '../controller/task.controller';

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

export default router;
