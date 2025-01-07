import { Request, Response } from "express";
import { duaServices } from "./duas.service";
import { duaSchema } from "./duas.validation";

const createDua = async (req: Request, res: Response) => {
  try {
    const parsedDua = duaSchema.parse(req.body);
    const dua = await duaServices.createDuaService(parsedDua);
    res.status(201).json(dua);
  } catch (error: unknown) {
    res.status(400).json({ message: "Error creating dua" });
  }
};

const getAllDuas = async (req: Request, res: Response) => {
  try {
    const duas = await duaServices.getAllDuasService();
    res.json(duas);
  } catch (error: unknown) {
    res.status(500).json({ message: "Error fetching duas" });
  }
};

export const duaController = { createDua, getAllDuas };
