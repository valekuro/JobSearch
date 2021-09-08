import { createSlice  } from "@reduxjs/toolkit";
import { fetchJobs } from "../../utils/requests";

export const initialStateJob: any[] = [];

export const JobSlice = createSlice({
  name: "JobSlice",
  initialState: { jobs: initialStateJob },
  reducers: { },
 extraReducers: (builder) => {
    builder.addCase(fetchJobs.fulfilled, (state, {payload}) => {
      const data = {...payload}
      let arr:any[] = [];
      Object.keys(data).map((element, key)=>{
        arr.push(data[key])
        return arr;
      })
      state.jobs = arr;
    });
    
  }, 
 
});


export default JobSlice.reducer;