const initialState = {
  user: []
}


//Action Controllers
const PLACEHOLDER = 'PLACEHOLDER';



//define action creators
export function updateBalance(balance){
  return {
    type: PLACEHOLDER,
    payload: test
  }
}







//Reducer Function
export default function properties(state = initialState, action){
  switch (action.type){
    case PLACEHOLDER:
      // return Object.assign({}, state, {userId: action.payload});
      return state;
    default:
      return state;
  }
}


