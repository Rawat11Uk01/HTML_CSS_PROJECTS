// const redux = require("redux");
// const reduxLogger = require('redux-logger')
// const combineReducers = redux.combineReducers;
// const buy_cakes = "buy_cakes";
// const buy_cookies = "buy_cookies";


// const applyMiddleware = redux.applyMiddleware;
// const logger = reduxLogger.createLogger();

// const buyCake = () => {
//   return {
//     type: buy_cakes,
//     info: "its about cake",
//   };
// };

// const buyCookies = () => {
//   return {
//     type: buy_cookies,
//   };
// };

// const initialstateCakestate = {
//   numOfCakes: 10,
// };

// const reducerF = (state = initialstateCakestate, action) => {
//   switch (action.type) {
//     case buy_cakes:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };

//     default:
//       return state;
//   }
// };
// const initialstateCookiestate = {
//   numOfCookiess: 10,
// };

// const cookieReducer = (state = initialstateCookiestate, action) => {
//   switch (action.type){
//     case buy_cookies:
//       return {
//         ...state,
//         numOfCookiess: state.numOfCookiess + 1,
//       };
//       default:
//         return state;
//   }
// };
// const rootReducer = combineReducers({
//   cake: reducerF,
//   cookie: cookieReducer,
// });
// const store = redux.createStore(rootReducer, applyMiddleware(logger) );
// // 
// const unsbscribe = store.subscribe(() => {
// //   console.log("initialstate", store.getState());
// });
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCookies());
// store.dispatch(buyCookies());
// store.dispatch(buyCookies());

// unsbscribe();
