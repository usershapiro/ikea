class FurnitureModel {
  public furnitureId : number;
  public furnitureType : number;
  public dimension : string;
  public color : string;
  public price : number;

  public constructor(furniture:FurnitureModel){
    this.furnitureId = furniture.furnitureId
    this.furnitureType = furniture.furnitureType
    this.dimension = furniture.dimension
    this.color = furniture.dimension
    this.price = furniture.price
  } 

}

export default FurnitureModel