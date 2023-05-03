import FurnitureModel from "../../../Models/FurnitureModel";
import "./CardList.css";


interface CardListProps{
    furniture:FurnitureModel
}
function CardList(props: CardListProps): JSX.Element {
    return (
        <div className="CardList">
            <div className="container">
                <h2>Name: {props.furniture.furnitureName}</h2>
                <br/>
                <span> Dimension: {props.furniture.dimension}</span>
                <br/>
                <span>Color : {props.furniture.color}</span>
                <br/>
                <span> Price: {props.furniture.price}</span>
                <br/>
                
    </div>			
        </div>
    );
}

export default CardList;
