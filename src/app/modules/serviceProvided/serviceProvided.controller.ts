import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { serviceFilterableFields } from './serviceProvided.constant';
import { IService } from './serviceProvided.interface';
import { ServiceProvidedService } from './serviceProvided.service';


const createServiceProvided = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  const result = await ServiceProvidedService.createServiceProvided(
    academicSemesterData
  );

  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created successfully!',
    data: result,
  });
});

const getSingleServiceProvided = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ServiceProvidedService.getSingleServiceProvided(id);

  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester fetched successfully !',
    data: result,
  });
});

const getAllServiceProvided = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, serviceFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await ServiceProvidedService.getAllServiceProvided(
    filters,
    paginationOptions
  );

  sendResponse<IService[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semesters retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const updateServiceProvided = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await ServiceProvidedService.updateServiceProvided(id, updatedData);

  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester updated successfully !',
    data: result,
  });
});
const deleteServiceProvided = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ServiceProvidedService.deleteServiceProvided(id);

  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester deleted successfully !',
    data: result,
  });
});

export const ServiceProvidedController = {
  createServiceProvided,
  getSingleServiceProvided,
  getAllServiceProvided,
  updateServiceProvided,
  deleteServiceProvided,
};
