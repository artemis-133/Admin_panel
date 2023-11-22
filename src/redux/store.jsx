// import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import thunk from "redux-thunk";

// // Initial state
// const initialState = {
//   token: null,
//   branchId: null,
//   role: null,
//   branchIdSelectedByHeadAdmin:null,
// };

// // Reducer
// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_AUTH_DATA":
//       return {
//         ...state,
//         token: action.payload.token,
//         branchId: action.payload.branchId,
//         role: action.payload.role,
//       };
//     case "CLEAR_AUTH_DATA":
//       return {
//         token: null,
//         branchId: null,
//         role: null
//       };
//       case "SET_BranchId_SelectedBy_HeadAdmin":
//         return {
//           branchIdSelectedByHeadAdmin: action.payload.id
//         }
//     default:
//       return state;
//   }
// };

// // Action creators
// export const setAuthData = (token, branchId, role) => ({
//   type: "SET_AUTH_DATA",
//   payload: { token, branchId, role },
// });

// export const setBranchIdSelectedByHeadAdmin = (id) =>({
//   type: "SET_BranchId_SelectedBy_HeadAdmin",
//   payload:{id}
// })

// export const clearAuthData = () => ({
//   type: "CLEAR_AUTH_DATA",
// });

// // Store
// const store = configureStore(authReducer, applyMiddleware(thunk));

// export default store;
