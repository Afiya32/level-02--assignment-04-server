import { ISubcategory } from "./subcategories.interface";
import { Subcategory } from "./subcategories.model";

const createSubcategoryService = async (data: ISubcategory) => {
  const subcategory = new Subcategory(data);
  return subcategory.save();
};

const getSubcategoriesByCategoryService = async (categoryId: string) => {
  return Subcategory.find({ category: categoryId });
};

const updateSubcategoryService = async (id: string, updates: Partial<ISubcategory>) => {
  return Subcategory.findByIdAndUpdate(id, updates, { new: true });
};

const deleteSubcategoryService = async (id: string) => {
  return Subcategory.findByIdAndDelete(id);
};

export const subcategoryServices = {
  createSubcategoryService,
  getSubcategoriesByCategoryService,
  updateSubcategoryService,
  deleteSubcategoryService,
};
