
import { createAsyncThunk } from '@reduxjs/toolkit'

/* export async function fetchJobs() {
  try {
    let response = await fetch('https://mocki.io/v1/18a4e873-a472-480d-867f-ef6e51558d00');
    response = await response.json();
    return response;
  } catch (error) {
    console.log("Something went wrong:   ", error);
  }
} */

export const fetchJobs = createAsyncThunk(
  'JobSlice/fetchJobs',
  async () => {
    const res = await fetch('https://mocki.io/v1/18a4e873-a472-480d-867f-ef6e51558d00').then(
    (data) => data.json()
  )
  return res
})


/* https://jsonplaceholder.typicode.com/posts */