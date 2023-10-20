import { Schema, model } from 'mongoose';
import { gender } from './customer.constant';
import { CustomerModel, ICustomer } from './customer.interface';

export const CustomerSchema = new Schema<ICustomer, CustomerModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      enum: gender,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    contactNo: {
      type: String,
      unique: true,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Customer = model<ICustomer, CustomerModel>('Customer', CustomerSchema);
