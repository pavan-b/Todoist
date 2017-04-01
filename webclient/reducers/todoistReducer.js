const initialState={
  message:'',
  messages:[]
}

const reducer= (state=initialState,action)=>{

switch (action.type) {
     case "ON_CHANGE": {
       return {...state,message:action.payload}
     }
     case "ON_SUBMIT": {
       return {...state, messages:[...state.messages , action.payload],message:''};
     }
     default:
     return state;

}
}
export default reducer;
