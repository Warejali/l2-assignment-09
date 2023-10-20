import { z } from 'zod';

const createCustomerZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    customer: z.object({
      fullName: z.string({
        required_error: 'fullName name is required',
      }),
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),
      contactNo: z.string({
        required_error: 'Contact number is required',
      }),
      gender: z.string({
        required_error: 'gender number is required',
      }),
      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required',
      }),
      address: z.string({
        required_error: 'Present address is required',
      }),

    }),
  }),
});
const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    admin: z.object({
      fullName: z.string({
        required_error: 'fullName name is required',
      }),
      designation: z.string({
        required_error: 'designation name is required',
      }),
      dateOfBirth: z.string({
        required_error: 'dateOfBirth name is required',
      }),
      bloodGroup: z.string({
        required_error: 'bloodGroup name is required',
      }),
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),
      contactNo: z.string({
        required_error: 'Contact number is required',
      }),
      gender: z.string({
        required_error: 'gender number is required',
      }),
      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required',
      }),
      presentAddress: z.string({
        required_error: 'Present address is required',
      }),
      profileImage: z.string().optional(),
    }),
  }),
});





export const UserValidation = {
  createCustomerZodSchema,
  createAdminZodSchema,
};
