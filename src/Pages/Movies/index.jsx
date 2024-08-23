import { useEffect , useState } from "react";
import Card from "../../Components/cards";
import { fetchMovie } from "../../Controller/MovieController";
import { Grid } from "@mui/material";
import HelpComponents from "../../Components/HelpingComponent"
import loadingImg from "../../Assets/Loading-pana.svg"
import ErrorImg from "../../Assets/404 error with people holding the numbers-rafiki.svg"

export function MoviesPage (){
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false)
    const [loading, setloading] = useState(false)
    useEffect(()=>{
        const fetchData = async()=>{
        try{
            const data = await fetchMovie()
            setMovies(data)
            setloading(false)
        }catch(e){
            setloading(false)
            setError(true)
            throw e
        }}
        fetchData()
    },[])
    if(loading){
        return <HelpComponents srcimg={loadingImg} text={"please wait"} altText={"wait img"}/>
    }
    if(error){
        <HelpComponents srcimg={ErrorImg} text={"error"} altText={"error img"}/>
    }
    return(
        <Grid spacing={2} sx={{padding:"20px"}} container >
            {
                movies.map((movie)=>(
                    <Grid item key={movie.id} xs={12} sm={8} md={4} lg={3}>
                        <Card item={movie} type={"movie"}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}