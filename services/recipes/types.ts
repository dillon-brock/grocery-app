import { SuccessfulResponse } from '../../types/types';

export type Recipe = {
  id: string;
  ownerId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface GetRecipesResponse extends SuccessfulResponse {
  recipes: Recipe[]
}