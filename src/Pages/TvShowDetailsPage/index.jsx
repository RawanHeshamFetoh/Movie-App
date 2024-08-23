import { useEffect , useState } from "react"
import { useParams  } from "react-router-dom"
import { fetchTvShowDetails } from "../../Controller/MovieController"
import { Card , CardContent ,CardMedia ,Container, Typography ,Button } from "@mui/material"
import { Link } from "react-router-dom"
import HelpComponents from "../../Components/HelpingComponent"
import loadingImg from "../../Assets/Loading-pana.svg"
import ErrorImg from "../../Assets/404 error with people holding the numbers-rafiki.svg"
import { DetailsPage } from "../../Components/DetaildCard"

export function TvShowDetailsPage(){
    const [tvShow, setTvShow] = useState({});
    const [loading , setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {id} =useParams()
    useEffect(()=>{
        const fetchDetails =async()=>{
            try{
                const data = await fetchTvShowDetails(id)
                setTvShow(data)
                setLoading(false)
                console.log(tvShow.genres);
            }catch(e){
                console.log(e);
                setLoading(false)
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
        
        // <Container className="tvshow-detail details">
        //     <Card className="card-detail" >
        //         <CardMedia 
        //             component='img'
        //             className="img-detail"
        //             src={`https://image.tmdb.org/t/p/w500${tvShow.backdrop_path}`}
        //         />
        //         <CardContent className="content-detail">
                    
        //             <Typography variant='h4' className="header-detail">{tvShow.name}</Typography> 
        //             <Typography variant='p' className="text-detail" ><span className="details-header">number of seasons</span> : {tvShow.number_of_seasons}</Typography>
        //             <Typography variant='p' className="text-detail" ><span className="details-header">number of episodes</span> : {tvShow.number_of_episodes}</Typography>
        //             <Typography variant='p' className="text-detail" > <span className="details-header">Rating</span>  : {tvShow.vote_average}</Typography>
        //             <Typography variant='p' className="text-detail" ><span className="details-header">genres : </span>
        //             {
        //                 tvShow.genres.map((genre , index)=>(
        //                     <p style={{display:"inline-block"}} key={genre.id}> {genre.name} {(index !== tvShow.genres.length-1)? ", " :" " }  </p>
                            
        //                 ))
        //             }
        //             </Typography>
                    
        //             <Typography variant="p" className="text-detail" ><span className="details-header">production companies</span>
        //                 {
        //                     tvShow.production_companies.map((company,index)=>(
        //                         <p style={{display:"inline-block"}} key={company.id}> {company.name} {(index !== tvShow.production_companies.length-1)? ", " :" " }   </p>
        //                     ))
        //                 }
                        
        //                 </Typography>
                    
        //             <div className="btns">
        //                 <Link to='/tvShows'>
        //                 <Button >Back</Button>
        //                 </Link>
        //             </div>
        //         </CardContent>
        //     </Card>
        // </Container>
        <div className="details-center">
            <DetailsPage item={tvShow} home="/tvShows"/>
        </div>

    )
}