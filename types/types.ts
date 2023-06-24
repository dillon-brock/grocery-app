import { ViewStyle } from "react-native";

export type RootStackParamList = {
  Entry: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

export type HomeStackParamList = {
  Dashboard: undefined;
  ListStack: { screen: keyof ListStackParamList };
  RecipeStack: { screen: keyof RecipeStackParamList };
  Share: {
    id: string,
    name: string,
    type: 'recipe' | 'list'
  }
  "Meal Plans": undefined
}

export type ListStackParamList = {
  Lists: undefined;
  ListDetail: { listId: string, type: 'new' | 'existing' }
}

export type RecipeStackParamList = {
  Recipes: undefined;
  RecipeDetail: { recipeId: string, type: 'new' | 'existing' }
}

export interface CommonScreenStyle  {
  container: ViewStyle;
}

export type DatabaseErrorResponse = {
  message: string;
  status: number;
  success: false;
}

enum SuccessMessage {
  SignUp = 'Signed up and logged in successfully',
  SignIn = 'Signed in successfully',
  NoUser = 'No current user',
  UserFound = 'Current user found',
  CreateList = 'List successfully created'
}

export interface SuccessfulResponse {
  success: true
  message: SuccessMessage
}

export type User = {
  id: string;
  email: string;
  username: string;
}

export interface List {
  id: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  title: string | null;
}

export type ListItem = {
  id: string;
  item: string;
  listId: string;
  bought: boolean;
  quantity: string | null;
  categoryId: string;
}

export interface CategoryInList {
  id: string;
  name: string;
  items: ListItem[];
}

export interface ListWithDetail extends List {
  categories: CategoryInList[];
}

export interface RecipeStep {
  id: string;
  num: number;
  detail: string;
  recipeId: string;
}

export interface PublicUser {
  id: string;
  username: string;
}

export enum ShareStatus {
  'success',
  'error',
  'none'
}

export interface NewShareData {
  userId: string;
  editable: boolean;
}

export type RecipeShare = {
  id: string;
  recipeId: string;
  userId: string;
  editable: boolean;
}

export type CoalescedRecipe = {
  id: string;
  name: string;
  meal: string;
  planRecipeId: string;
}

export type MealPlanWithRecipes = {
  id: string;
  ownerId: string;
  date: string;
  updatedAt: string;
  createdAt: string;
  recipes: CoalescedRecipe[]
}