import FurnitureModel from "../Models/FurnitureModel"
import axios from "axios"
import appConfig from "../Utils/config"
import TypeModel from "../Models/TypeModel"
import { NumericKeys } from "react-hook-form/dist/types/path/common"
class DataService {

  public  async  getAllFurniture(furnitureTypeId:number):Promise <FurnitureModel[]>{
      const response = await axios.get<FurnitureModel[]>(appConfig.furnitureUrl)
      const furniture = response.data
      return furniture
    }
    public async getFurnitureByType(furnitureTypeId:number):Promise <FurnitureModel[]>{
      const response = await axios.get<FurnitureModel[]>(appConfig.furnitureByTypeUrl+furnitureTypeId)
       const furnitureByType = response.data
       return furnitureByType
    }

    public  async  getAllTypes():Promise <TypeModel[]>{
        const response = await axios.get<TypeModel[]>(appConfig.typeUrl)
        const types = response.data
        return types
      }

   public async addFurniture(furniture:FurnitureModel):Promise<void>{
     await axios.post<FurnitureModel>(appConfig.furnitureUrl,furniture)
   }
}

const dataService = new DataService()
export default dataService