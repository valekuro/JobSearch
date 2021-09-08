
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchJobs = createAsyncThunk(
  'JobSlice/fetchJobs',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then(
    (data) => data.json()
  )
  return res
})


export async function fetchJobsByUser(user:string){
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?email=${user}`).then(
    (data) => data.json())
    let arr:any[] = [];
      return Object.keys(res).map((element, key)=>{
        arr.push(res[key])
        return arr;
      })
      
}
/* export const fetchJobsByUser = createAsyncThunk(
  'JobSlice/fetchJobsByUser',
  async (user) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?email=${user}`).then(
    (data) => data.json()
  )
  return res
}) */


/* https://mocki.io/v1/18a4e873-a472-480d-867f-ef6e51558d00 */