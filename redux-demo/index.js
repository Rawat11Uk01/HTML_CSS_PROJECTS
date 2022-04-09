const redux = require('redux');



const buy_cakes = 'buy_cakes';

const buyCake = ()=>{
    return{
        type: buy_cakes,
        info: "its about cake"
    }
}

const initialstate = {
    numOfCakes : 10,
}

const reducerF = (state=initialstate,action)=>{
    switch(action.type){
        case buy_cakes : return{
            ...state,
            numOfCakes: state.numOfCakes -1,
        }
        default: return state;
    }
    
}
const store = redux.createStore(reducerF);
store.subscribe(()=>{console.log('initialstate', store.getState())});
store.dispatch(buyCake())
