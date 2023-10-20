import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-customer',
  validateRequest(UserValidation.createCustomerZodSchema),
  UserController.createCustomer
);


router.post(
  '/create-admin',

  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.createAdmin
);

export const UserRoutes = router;
