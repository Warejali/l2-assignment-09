import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { CustomerController } from './customer.controller';
const router = express.Router();

router.get(
  '/:id',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,

    ENUM_USER_ROLE.CUSTOMER
  ),
  CustomerController.getSingleCustomer
);


router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  CustomerController.deleteCustomer
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CustomerController.updateCustomer
);
router.get(
  '/',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
  ),
  CustomerController.getAllCustomers
);

export const CustomerRoutes = router;
