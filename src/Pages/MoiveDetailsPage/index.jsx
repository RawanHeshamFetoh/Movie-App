import { useEffect , useState } from "react"
import { useParams  } from "react-router-dom"
import { fetchMoiveDetails } from "../../Controller/MovieController"
import { Card , CardContent ,CardMedia ,Container, Typography ,Button } from "@mui/material"
import { Link } from "react-router-dom"
import HelpComponents from "../../Components/HelpingComponent"
import loadingImg from "../../Assets/Loading-pana.svg"
import ErrorImg from "../../Assets/404 error with people holding the numbers-rafiki.svg"
import { DetailsPage } from "../../Components/DetaildCard"

export function MovieDetailsPage(){
    const [movie, setMovie] = useState({})
    const {id} =useParams()
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(false)
    
    useEffect(()=>{
        const fetchDetails =async()=>{
            try{
                const data = await fetchMoiveDetails(id)
                setMovie(data)
                setLoading(false)
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
        <div className="details-center">
        {/* <Container className="movie-detail details">
            
            <Card className="card-detail">
                <CardMedia 
                    component='img'
                    className="img-detail"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    />
                <CardContent className="content-detail">
                    <Typography variant='h4' className="header-detail">{movie.title}</Typography> 
                    <Typography variant='p' className="text-detail" style={{display:"block"}}> <span className="details-header">Rating</span>  : {movie.vote_average}</Typography>
                    <Typography variant='p' className="text-detail" style={{display:"block"}}><span className="details-header">budget</span> : {movie.budget} $</Typography>
                    <Typography variant='p' className="text-detail" style={{display:"block"}}><span className="details-header">genres : </span>
                    {
                        movie.genres.map((genre,index)=>(
                            <p style={{display:"inline-block"}} key={genre.id}> {genre.name} {(index !== movie.production_companies.length-1)? ", " :" " }   </p>
                        ))
                    }
                    </Typography>
                    
                    <Typography variant="p" className="text-detail"style={{display:"block"}} ><span className="details-header">production companies</span>
                        {
                            movie.production_companies.map((company, index)=>(
                                <p style={{display:"inline-block"}} key={company.id}>  {company.name} {(index !== movie.production_companies.length-1)? ", " :" " }   </p>
                            ))
                        }
                        
                        </Typography>
                    
                    <div className="btns">
                        <div>
                        <Link to='/'>
                            <Button >Back</Button> 
                        </Link>       
                        <Link to={movie.homepage}>
                            <Button >Go TO Movie Page</Button> 
                        </Link>       
                        </div>
                    </div>
                    
                    
                </CardContent>
            </Card>
            
        </Container> */}
        <DetailsPage item={movie} home="/" />
        </div>
    )
}