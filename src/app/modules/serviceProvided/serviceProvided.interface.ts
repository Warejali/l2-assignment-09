import { Model } from 'mongoose';



export type IService = {
  title: string;
  description: string;
  price: string;
  availableTeam: string;
  syncId: string
  image: string;
};

export type ServiceModel = Model<IService>;

export type IServiceFilters = {
  searchTerm?: string;
};

