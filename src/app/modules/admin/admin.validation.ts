import { z } from 'zod';

const updateAdmin = z.object({
  body: z.object({
    fullName: z.string().optional(),
    dateOfBirth: z.string().optional(),

    gender: z.string().optional(),

    bloodGroup: z.string().optional(),

    email: z.string().email().optional(),

    contactNo: z.string().optional(),

    emergencyContactNo: z.string().optional(),

    permanentAddress: z.string().optional(),


    designation: z.string().optional(),

    profileImage: z.string().optional(),
  }),
});

export const AdminValidation = {
  updateAdmin,
};
