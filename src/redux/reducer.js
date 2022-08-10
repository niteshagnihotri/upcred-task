import { SET_VIDEOS } from "./constant";

export const cardData = (data=[], action) =>{
    switch (action.type){
        case SET_VIDEOS:
            return [...action.data];
        default:
            return data;
    }
}
