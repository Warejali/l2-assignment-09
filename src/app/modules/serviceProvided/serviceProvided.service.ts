import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import {
  serviceSearchableFields
} from './serviceProvided.constant';
import {
  IService, IServiceFilters
} from './serviceProvided.interface';
import { Service } from './serviceProvided.model';

const createServiceProvided = async (
  payload: IService
): Promise<IService> => {
  const result = await Service.create(payload);
  return result;
};

const getSingleServiceProvided = async (
  id: string
): Promise<IService | null> => {
  const result = await Service.findById(id);
  return result;
};

const getAllServiceProvided = async (
  filters: IServiceFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IService[]>> => {
  // Extract searchTerm to implement search query
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  // Search needs $or for searching in specified fields
  if (searchTerm) {
    andConditions.push({
      $or: serviceSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  // Dynamic  Sort needs  field to  do sorting
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Service.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Service.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const updateServiceProvided = async (
  id: string,
  payload: Partial<IService>
): Promise<IService | null> => {

  const result = await Service.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteServiceProvided = async (
  id: string
): Promise<IService | null> => {
  const result = await Service.findByIdAndDelete(id);
  return result;
};


export const ServiceProvidedService = {
  createServiceProvided,
  getSingleServiceProvided,
  getAllServiceProvided,
  updateServiceProvided,
  deleteServiceProvided,

};
