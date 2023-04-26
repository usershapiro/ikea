import express, {Request, Response, NextFunction} from "express";
import logic from "../5-logic/logic"
import FurnitureModel from "../4-models/furnitureModel";

const router = express.Router()

router.get("/furniture", async(request:Request,response:Response,next:NextFunction)=>{
    try {
        const furniture =  await logic.getAllFurniture()
        response.json(furniture)
    }
    catch(err:any) {
        next(err)
    }
})

router.get("/furniture-by-type/:typeId", async(request:Request,response:Response,next:NextFunction)=>{
    try {
        const typeId = +  request.params.typeId
        const furnitureByType =  await logic.getFurnitureByType(typeId)
        response.json(furnitureByType)
    }
    catch(err:any) {
        next(err)
    }
})

router.get("/furnitur-type", async(request:Request,response:Response,next:NextFunction)=>{
    try {
        const furnituretype =  await logic.getAllTypes()
        response.json(furnituretype)
    }
    catch(err:any) {
        next(err)
    }
})

router.post("/furniture", async(request:Request,response:Response,next:NextFunction)=>{
    try {
         const furniture = new  FurnitureModel(request.body)
         const addedFurniture = await logic.addFurniture(furniture)
         response.status(201).json(addedFurniture)
    }
    catch(err:any) {
        next(err)
    }
})


export default router