import { useState , useEffect } from "react";
import Card from "../../Components/cards"
import {fetchTvShows} from "../../Controller/MovieController"
import { Grid } from "@mui/material";
import HelpComponents from "../../Components/HelpingComponent"
import loadingImg from "../../Assets/Loading-pana.svg"
import ErrorImg from "../../Assets/404 error with people holding the numbers-rafiki.svg"

export  function TvShowsPage(){
    
    const [tv , setTv] = useState([])
    const [loading, setloading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await fetchTvShows()
                console.log(data);
                setloading(false)
                setTv(data)
            }catch(err){
                setloading(false)
                setError(true)
                throw err
            }
        }
        fetchData();
        

    },[])
    if(loading){
        return <HelpComponents srcimg={loadingImg} text={"please wait"} altText={"wait img"}/>
    }
    if(error){
        <HelpComponents srcimg={ErrorImg} text={"error"} altText={"error img"}/>
    }
    return(
        <Grid spacing={2} container sx={{padding:"20px"}}>
            {
                tv.map((tvShow)=>{
                    return(

                        <Grid item xs={12} sm={6} md={4} lg={3} key={tvShow.id}>
                        <Card item={tvShow} type={'tvShows'} />
                    </Grid>
                    )
                })
            }
        </Grid>
        
    
        
        
        
    )
}