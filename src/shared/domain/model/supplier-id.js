import {ValidationError} from "./errors.js";

export class SupplierID{
    #value;

    constructor(value){
        if(!ValidateUuid(value)) {
            throw new ValidationError(`Invalid Supplierid: ${value}. Must be a valid UUID`);
        }
        this.#value = value;
        Object.freeze(this);
    }
    get value(){
        return this.#value;
    }

    equals(other){
        return(other instanceof SupplierID && this.#value === other.#value);
    }
    static from(value){
        return new SupplierID(value);
    }

    toString(){
        return this.#value;
    }
}