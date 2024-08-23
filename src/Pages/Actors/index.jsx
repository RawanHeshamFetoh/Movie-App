import Card from "../../Components/cards";
import { useState , useEffect } from "react";
import { fetchActors } from "../../Controller/MovieController";
import { Grid } from "@mui/material";
import HelpComponents from "../../Components/HelpingComponent"
import loadingImg from "../../Assets/Loading-pana.svg"
import ErrorImg from "../../Assets/404 error with people holding the numbers-rafiki.svg"

export function ActorsPage(){
    const [actors, setActors] = useState([]);
    const [loading, setloading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const data = await fetchActors();
                setActors(data);
                setloading(false)
            }catch(e){
                console.log(e);
                setloading(false)
                setError(true)
                throw e
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
        <Grid container spacing={2} sx={{padding:"20px"}}>
            {actors.map((actor)=>(
                <Grid item xs={12} sm={6} md={4} lg={3} key={actor.id}>
                    <Card type={'actors'} item={{...actor,image:`https://image.tmdb.org/t/p/w500${actor.profile_path}`}} />
                </Grid>
            ))}
        </Grid>
    )
}