import { Request, Response } from "express";
import { subcategoryServices } from "./subcategories.service";
import { subcategorySchema } from "./subcategories.validation";

const createSubcategory = async (req: Request, res: Response) => {
  try {
    const parsedData = subcategorySchema.parse(req.body);
    const subcategory = await subcategoryServices.createSubcategoryService(parsedData);
    res.status(201).json(subcategory);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

const getSubcategoriesByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const subcategories = await subcategoryServices.getSubcategoriesByCategoryService(categoryId);
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

const updateSubcategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedSubcategory = await subcategoryServices.updateSubcategoryService(id, updates);
    if (!updatedSubcategory) {
      res.status(404).json({ message: "Subcategory not found" });
    } else {
      res.json(updatedSubcategory);
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

const deleteSubcategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedSubcategory = await subcategoryServices.deleteSubcategoryService(id);
    if (!deletedSubcategory) {
      res.status(404).json({ message: "Subcategory not found" });
    } else {
      res.json({ message: "Subcategory deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const subcategoryController = {
  createSubcategory,
  getSubcategoriesByCategory,
  updateSubcategory,
  deleteSubcategory,
};
