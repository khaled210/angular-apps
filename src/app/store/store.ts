import { Action, State } from "@ngrx/store";

let initialState = {
    n : 0
}


export function counterReduser(state = initialState , action: Action) {
    switch(action.type){
        case "inc":
            return {
                n : state.n + 1 
            }
        case "dec":
            return {
                n : state.n - 1
            }
        case "back":
                return {
                    n : 0
            }
        default:
            return state
    }
}