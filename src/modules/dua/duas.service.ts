import { Dua } from "./duas.model";
import { IDua } from "./duas.interface";

const createDuaService = async (duaData: IDua) => {
  return await new Dua(duaData).save();
};

const getAllDuasService = async () => {
  return await Dua.find({}).populate("category");
};

export const duaServices = {
  createDuaService,
  getAllDuasService,
};
