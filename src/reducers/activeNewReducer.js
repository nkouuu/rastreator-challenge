import {GET_NEW} from '../actions/types'

export default function(state={},action){
    switch (action.type){
        case GET_NEW : 
            console.log(action.payload)
            return action.payload.data
        default : return {}
    }
}