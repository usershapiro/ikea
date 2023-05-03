import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
import FurnitureModel from "../../../Models/FurnitureModel";
import TypeModel from "../../../Models/TypeModel";
import FurnitureService from "../../../Services/FurnitureService";
import CardList from "../CardList/CardList";
import Bedpic from "../../../assests/bed.webp";

function List(): JSX.Element {
  const [furniturType, setFurnitureType] = useState <TypeModel[]>([]);

  const [furniture , setFurniture] = useState<FurnitureModel[]>([]);

   useEffect(()=>{
    FurnitureService.getAllTypes()
    .then(furniturType => setFurnitureType(furniturType))
    .catch(err => alert(err.message))

   },[])

   async function showFurniture(args: ChangeEvent<HTMLSelectElement>){
    const value = +args.target.value;
    FurnitureService.getFurnitureByType(value)
    .then(furniture=>setFurniture(furniture))
    .catch(err=>alert(err.message))
    
 }

    return (
        <div className="List">
						<h2>furniture list!</h2>
                        <label>Select Target Audience:</label>
            <select defaultValue="" onChange={showFurniture}>
                <option disabled value="" >select..</option>
                {furniturType.map(f =>
                <option key={f.furnitureTypeId} value={f.furnitureTypeId}>
                    {f.furnitureType}
                    </option>
                    )}
            </select>

            <br/>

            {furniture.map(f => <CardList key={f.furnitureId} furniture={f} />)}
            
        </div>
    );
}

export default List;
