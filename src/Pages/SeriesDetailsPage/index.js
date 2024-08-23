import { useEffect , useState } from "react"
import { useParams  } from "react-router-dom"
import { fetchTvShowDetails } from "../../Controller/MovieController"
import { Card , CardContent ,CardMedia ,Container, Typography ,Button } from "@mui/material"
import { Link } from "react-router-dom"
import './style.css'
import HelpComponents from "../../Components/HelpingComponent"
import loadingImg from "../../Assets/Loading-pana.svg"
import ErrorImg from "../../Assets/404 error with people holding the numbers-rafiki.svg"
import { DetailsPage } from "../../Components/DetaildCard"

export function SeriesDetailsPage(){
    const [series, setSeries] = useState({})
    const [loading, setloading] = useState(true)
    const [error, setError] = useState(false)
    const {id} =useParams()
    useEffect(()=>{
        const fetchDetails =async()=>{
            try{
                const data = await fetchTvShowDetails(id)
                setSeries(data)
                setloading(false)
            }catch(e){
                console.log(e);
                setloading(false)
                setError(true)
                throw e
            
            }
        }
        fetchDetails()
    },[id])
    if(loading){
        return <HelpComponents srcimg={loadingImg} text={"please wait"} altText={"wait img"}/>
    }
    if(error){
        <HelpComponents srcimg={ErrorImg} text={"error"} altText={"error img"}/>
    }
    return (
        // <Container className="series-detail details">
        //     <Card className="card-detail">
        //         <CardMedia 
        //             component='img'
        //             className="img-detail"
        //             src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`}
        //         />
        //         <CardContent className="content-detail">
        //             <Typography variant='h4' className="header-detail">{series.name} </Typography>

        //             <Typography className="text-detail" variant='p' ><span className="details-header">number of seasons</span> : {series.number_of_seasons}</Typography>

        //             <Typography className="text-detail" variant='p' ><span className="details-header">number of episodes</span> : {series.number_of_episodes}</Typography>

        //             <Typography className="text-detail" variant='p' ><span className="details-header">genres : </span>
        //             {
        //                 series.genres.map((genre,index)=>(
        //                     <p style={{display:"inline-block"}} key={genre.id}> {genre.name} {(index !== series.production_companies.length-1)? ", " :" " }   </p>
        //                 ))
        //             }
        //             </Typography>
                    
        //             <Typography className="text-detail" variant="p"  ><span className="details-header">production companies : </span>
        //                 {
        //                     series.production_companies.map((company, index)=>(
        //                         <p style={{display:"inline-block"}} key={company.id}>  {company.name} {(index !== series.production_companies.length-1)? ", " :" " }   </p>
        //                     ))
        //                 }
        //             </Typography>

        //             <Typography className="text-detail" variant='p' > <span className="details-header">Rating</span>  : {series.vote_average}</Typography>
        //             <div className="btns">
        //                 <div>
        //                 <Link to='/series'className="link" >
        //                     <Button >Back</Button> 
        //                 </Link>       
        //                 <Link className="link" to={series.homepage}>
        //                     <Button >Go TO Movie Page</Button> 
        //                 </Link>       
        //                 </div>
        //             </div>
        //         </CardContent>
        //     </Card>
        // </Container>
        <div className="details-center">
            <DetailsPage item={series} home="/series"/>
        </div>
    )
}