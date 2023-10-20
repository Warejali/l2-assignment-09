import { z } from 'zod';
import { } from './serviceProvided.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({

    title: z.string({
      required_error: 'Year is required ',
    }),


  }),
});

const updateAcademicSemesterZodSchema = z
  .object({
    body: z.object({


      title: z
        .string({
          required_error: 'Year is required ',
        })
        .optional(),


    }),
  })
  .refine(
    data =>
      (data.body.title) ||
      (!data.body.title),
    {
      message: 'Either both title and code should be provided or neither',
    }
  );

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
};
