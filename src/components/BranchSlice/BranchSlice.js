import {createSlice} from '@reduxjs/toolkit'


const BranchSlice = createSlice({

    name:"branch",
    initialState: {
        token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcwMDU5ODI5NCwiZXhwIjoxNzAwNjg0Njk0fQ.tFylx0SSzrjsA8Y0Zg2R8o6d1fzFrP4NH-zpXBAM11M",
        branchId: null,
        role: null,
        branchIdSelectedByHeadAdmin:null,
      },
    reducers:{

        setAuthData:(state,action)=>{
            state.token = action.payload.Token;
            state.role = action.payload.Role;
            state.branchId = action.payload.BranchId; 
            console.log("in slice" +action.payload.Token)
        },
        setBranchIdSelectedByHeadAdmin:(state,action)=>{
            state.branchIdSelectedByHeadAdmin = action.payload.id;
        },
        clearAuthData:(state,action)=>{
            state.token=null;
            state.role=null;
            state.branchId=null;
            state.branchIdSelectedByHeadAdmin=null;
        }
    }
})


export const {clearAuthData,setAuthData,setBranchIdSelectedByHeadAdmin} = BranchSlice.actions;

export default BranchSlice.reducer;
