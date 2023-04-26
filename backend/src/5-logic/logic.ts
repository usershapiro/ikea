import { OkPacket } from "mysql";
import dal from "../2-utils/dal"
import FurnitureModel from "../4-models/furnitureModel"
import TypeModel from "../4-models/TypeModel";

async function getAllFurniture(): Promise <FurnitureModel[]> {
    const sql = `
    SELECT furniture.furnitureId , furnituretype.furnitureType AS furnitureName , furniture.dimension , 
    furniture.color , furniture.price FROM furniture
     INNER JOIN furnituretype ON furniture.furnitureTypeId= furnituretype.furnitureTypeId;
    `;
    const furniture = await dal.execute(sql)
    return furniture

}

async function getAllTypes(): Promise <TypeModel[]> {
    const sql = `
    SELECT * FROM furnituretype
    `;
    const furnituretype = await dal.execute(sql)
    return furnituretype

}
async function getFurnitureByType(typeId:number): Promise<FurnitureModel[]>{
   
    const sql = `
    SELECT furniture.furnitureId , furnituretype.furnitureType AS furnitureName , furniture.dimension , 
    furniture.color , furniture.price FROM furniture
     INNER JOIN furnituretype ON furniture.furnitureTypeId= furnituretype.furnitureTypeId
     WHERE  furniture.furnitureTypeId = ${typeId}
     ;
    `;
    const furnitureByType = await dal.execute(sql)
    return furnitureByType
    
}

async function addFurniture(furniture:FurnitureModel):Promise <FurnitureModel>{
    const sql=`INSERT INTO furniture  VALUES(
        DEFAULT,
        '${furniture.furnitureType}',
        '${furniture.dimension}',
        '${furniture.color}',
        '${furniture.price}'
        )`;

        const info:OkPacket = await dal.execute(sql)
        furniture.furnitureId = info.insertId
        return furniture
}

export default {
    getAllFurniture,
    addFurniture,
    getAllTypes,
    getFurnitureByType
}