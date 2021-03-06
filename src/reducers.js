import { GET_RANDOM_MOVIE } from './actions';

const DEFAULT_STATE = {
  omdbData: {}
}

const rootReducer = (state = DEFAULT_STATE, action)=>{
switch(action.type){
  case GET_RANDOM_MOVIE:
    return {
      ...state,
      omdbData: action.omdbData
    }
  default:
    return state
}
};
export default rootReducer;