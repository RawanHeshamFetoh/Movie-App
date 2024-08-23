import { useState , useEffect } from "react";
import Card from "../../Components/cards";
import { fetchSeries } from "../../Controller/MovieController";
import { Grid } from "@mui/material";
import HelpComponents from "../../Components/HelpingComponent"
import loadingImg from "../../Assets/Loading-pana.svg"
import ErrorImg from "../../Assets/404 error with people holding the numbers-rafiki.svg"

export function SeriesPage(){
    const [series, setSeries] = useState([]);
    const [loading, setloading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await fetchSeries()
                setSeries(data)
                setloading(false)
            }catch(e){
                console.log(e)
                setloading(false)
                setError(true)
                throw e
            }
        }
        fetchData()
    },[])
    if(loading){
        return <HelpComponents srcimg={loadingImg} text={"please wait"} altText={"wait img"}/>
    }
    if(error){
        <HelpComponents srcimg={ErrorImg} text={"error"} altText={"error img"}/>
    }
    return (
        <Grid container spacing={2} sx={{padding:"20px"}}>
            {
                series.map((serie)=>(
                    <Grid item xs={12} sm={6} md={4} lg={3} key={serie.id}>
                        <Card type={'series'} item={serie} />
                    </Grid>
                ))
            }
        </Grid>
    )
}