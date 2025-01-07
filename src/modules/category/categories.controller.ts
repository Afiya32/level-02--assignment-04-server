import { Request, Response } from "express";
import { categoryServices } from "./categories.service";
import { categorySchema } from "./categories.validation";

const createCategory = async (req: Request, res: Response) => {
  try {
    const parsedCategory = categorySchema.parse(req.body);
    const category = await categoryServices.createCategoryService(parsedCategory);
    res.status(201).json(category);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Unknown error occurred" });
    }
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryServices.getAllCategoriesService();
    res.json(categories);
  } catch (error: unknown) {
    res.status(500).json({ message: "Error fetching categories" });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCategory = await categoryServices.deleteCategoryService(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error: unknown) {
    res.status(500).json({ message: "Error deleting category" });
  }
};

export const categoryController = {
  createCategory,
  getAllCategories,
  deleteCategory,
};
