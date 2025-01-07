import { Category } from "./categories.model";
import { ICategory } from "./categories.interface";

const createCategoryService = async (categoryData: ICategory) => {
  const category = new Category(categoryData);
  return await category.save();
};

const getAllCategoriesService = async () => {
  return await Category.find({});
};

const deleteCategoryService = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};

export const categoryServices = {
  createCategoryService,
  getAllCategoriesService,
  deleteCategoryService,
};
