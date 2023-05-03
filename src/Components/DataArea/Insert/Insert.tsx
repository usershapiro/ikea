import { useNavigate } from "react-router-dom";
import "./Insert.css";
import { useEffect, useState } from "react";
import TypeModel from "../../../Models/TypeModel";
import { useForm } from "react-hook-form";
import FurnitureModel from "../../../Models/FurnitureModel";
import FurnitureService from "../../../Services/FurnitureService";

function Insert(): JSX.Element {

    

    const [furniturType, setFurnitureType] = useState <TypeModel[]>([]);
    const {register, handleSubmit}= useForm<FurnitureModel>()


    const navigate = useNavigate();

    useEffect(()=>{
        FurnitureService.getAllTypes()
        .then(furniturType => setFurnitureType(furniturType))
        .catch(err => alert(err.message))
    },[]);

    async function send(furniture: FurnitureModel){
        try{
            await FurnitureService.addFurniture(furniture)
            alert("Furniture has ben added!")
            navigate("/furniture")
            
        }
        catch(err:any){
            alert(err.message)
        }

    }
    return (
        <div className="Insert">
				<form onSubmit={handleSubmit(send)}>
                    <label>Select Furniture Type:</label>
                    <select defaultValue="" {...register("furnitureType")}>

                        <option disabled value="">Select...</option>
                        {furniturType.map( f=>
                            <option key={f.furnitureTypeId} value={f.furnitureTypeId}>{f.furnitureType}</option>
                            )}
                            </select><br/>
                       
                       <label>Dimension:</label>     
                    <input type="text"  {...register("dimension")} required/><br/>

                    <label>Color:</label>     
                    <input type="text"  {...register("color")} required/><br/>

                    <label>Price:</label>
                    <input type="number"  {...register("price")} required/><br/>
              
                    <button>Add</button>
                </form>

        </div>
    );
}

export default Insert;
