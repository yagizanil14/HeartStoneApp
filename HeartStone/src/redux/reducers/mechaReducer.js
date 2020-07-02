import {UPDATE_MECHA} from '../actions/mecha-action'

function mechaReducer(state=[], {type,payload}){
    switch(type){
        case UPDATE_MECHA:
            return payload 
        default:
            return state
    }
}

export default mechaReducer