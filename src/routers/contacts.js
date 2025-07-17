import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactsSchema,
  updateContactsSchema,
} from '../validation/contacts.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContactsController));

router.get(
  '/contacts/:contactId', 
  isValidId, 
  ctrlWrapper(getContactByIdController),
);

router.post(
  '/contacts', 
  validateBody(createContactsSchema), 
  ctrlWrapper(createContactController),
);

router.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(updateContactsSchema),
  ctrlWrapper(updateContactController),
);

router.delete(
  '/contacts/:contactId', 
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default router;

//router.get('/contacts', ctrlWrapper(getAllContactsController));

//router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

//router.post('/contacts', ctrlWrapper(createContactController));

//router.patch('/contacts/:contactId', ctrlWrapper(updateContactController));

//router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));