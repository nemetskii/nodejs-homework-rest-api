import { Router } from 'express';

import ctrl from '../../controllers/contacts.js';

import validateBody from '../../middlewares/index.js';
import contactSchema from '../../schemas/contacts.js';

const router = Router();

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', validateBody(contactSchema), ctrl.add);

router.delete('/:id', ctrl.deleteById);

router.put('/:id', validateBody(contactSchema), ctrl.updateById);

export default router;
