import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
// import { UserController } from './user.controller';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ServiceProvidedController } from './serviceProvided.controller';
import { AcademicSemesterValidation } from './serviceProvided.validation';
const router = express.Router();

router.post(
  '/create-service',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ServiceProvidedController.createServiceProvided
);

router.get(
  '/:id',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,

    ENUM_USER_ROLE.CUSTOMER
  ),
  ServiceProvidedController.getSingleServiceProvided
);

router.get(
  '/',

  ServiceProvidedController.getAllServiceProvided
);

router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ServiceProvidedController.updateServiceProvided
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ServiceProvidedController.deleteServiceProvided
);

export const AcademicSemesterRoutes = router;
