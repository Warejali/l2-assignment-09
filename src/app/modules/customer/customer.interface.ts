import { Model } from 'mongoose';



export type ICustomer = {
  id: string;
  fullName: string; //embedded object
  gender: 'male' | 'female';
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  address: string;

};

export type CustomerModel = Model<ICustomer, Record<string, unknown>>;

export type ICustomerFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contactNo?: string;
};
