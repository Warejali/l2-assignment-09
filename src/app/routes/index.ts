import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CustomerRoutes } from '../modules/customer/customer.route';
import { AcademicSemesterRoutes } from '../modules/serviceProvided/serviceProvided.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/services',
    route: AcademicSemesterRoutes,
  },

  {
    path: '/customers',
    route: CustomerRoutes,
  },

  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
