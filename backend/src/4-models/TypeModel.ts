class TypeModel {
    public furnitureTypeId :number;
    public furnitureType : string;

    public constructor(type:TypeModel){
        this.furnitureTypeId = type.furnitureTypeId;
        this.furnitureType = type.furnitureType;
    }
}
export default TypeModel