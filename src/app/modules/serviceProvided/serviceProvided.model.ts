import { Schema, model } from 'mongoose';
import { IService } from './serviceProvided.interface';

const serviceSchema = new Schema<IService>(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,

    },

    availableTeam: {
      type: String,
      required: true,

    },
    image: {
      type: String,
      required: true,

    },
    syncId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// serviceSchema.pre('save', async function (next) {
//   const isExist = await Service.findOne({
//     title: this.title,
//     year: this.description,
//   });
//   console.log(isExist)
//   if (isExist) {
//     throw new ApiError(
//       httpStatus.CONFLICT,
//       'Academic semester is already exist !'
//     );
//   }
//   next();
// });

export const Service = model<IService>(
  'Service',
  serviceSchema
);
