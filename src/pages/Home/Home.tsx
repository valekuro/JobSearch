import Cards from "../../components/Cards";
import JobCardPreview from "../../components/JobCardPreview";
import { fetchJobs } from "../../utils/requests";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
 
export default function Home() { 
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchJobs())
  }, [])
  const data = useAppSelector((state)=>state.JobSlice.jobs)
  return (
    <Cards
      content={
        data.map((elem, key)=>{
          return <JobCardPreview
          topInformations={["5h ago", elem['time']]}
          title={elem['title']}
          insertBy={elem['userId']}
          footer={elem['country']}
        />
        })
       }
     
    />
  );
}

