import { ADD_ITEM, DELETE_ITEM} from "../actionTypes/actionTypes";

const add_item =() =>{
    return {
        type:ADD_ITEM
    }
}

const delete_item = () => {
    return {
        type:DELETE_ITEM
    }
}

export {add_item, delete_item}