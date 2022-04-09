const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: "true",
  data: [],
  error: "",
};

const fetch_user_request = "fetch_user_request";
const fetch_request_succesfull = "fetch_request_succesfull";
const fetch_request_error = "fetch_request_error";

const fetcthUserRequest = () => {
  return {
    type: fetch_user_request,
  };
};
const fetchRequestSuccesfull = (user) => {
  return {
    type: fetch_request_succesfull,
    payload: user,
  };
};
const fetchRequestError = (error) => {
  return {
    type: fetch_request_error,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetch_user_request:
      return {
        loading: true,
        data: [],
        error: "",
      };
    case fetch_request_succesfull:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case fetch_request_error:
      return {
        loading: false,
        data: [],
        error: error,
      };
  }
};



const sendrequest = () => {
  return function (dispatch) {
    dispatch(fetcthUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => user.id);
        dispatch(fetchRequestSuccesfull(data));
      })
      .catch((error) => {
        dispatch(fetchRequestError(error));
      });
  };
};
const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(sendrequest());

// const initialState = {
//   loading: true,
//   data: [],
//   error: "",
// };

// const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// const fetchUserRequest = () => {
//   return {
//     type: FETCH_USERS_REQUEST,
//   };
// };

// const fetchUserSuccess = (user) => {
//   return {
//     type: FETCH_USERS_SUCCESS,
//     payload: user,
//   };
// };

// const fetchUserFailure = (error) => {
//   return {
//     type: FETCH_USERS_SUCCESS,
//     payload: error,
//   };
// };
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USERS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//   }
//   switch (action.type) {
//     case FETCH_USERS_SUCCESS:
//       return {
//         loading: false,
//         data: action.payload,
//         error: "",
//       };
//   }
//   switch (action.type) {
//     case FETCH_USER_FAILURE:
//       return {
//         loading: false,
//         data: [],
//         error: error,
//       };
//   }
// };

// // async action creater

// const fetchUser = () => {
//   return function (dispatch) {
//     dispatch(fetchUserRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/user")
//       .then((res) => {
//         const users = res.data.map((user) => user.name);
//         dispatch(fetchUserSuccess(users));
//       })
//       .catch((error) => dispatch(fetchUserFailure(error)));
//   };
// };

// const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware));
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(fetchUser());
