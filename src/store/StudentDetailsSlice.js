import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentDetails : null
}

const StudentDetailsSlice = createSlice({
    name:"studentDetails",
    initialState,
    reducers : {
        setStudentDetails : (state,action) =>{
            state.studentDetails = action.payload; 
        }
    }
})

export const {setStudentDetails} = StudentDetailsSlice.actions;
export default StudentDetailsSlice.reducer;