import { Card , CardContent ,CardMedia ,Container, Typography ,Button } from "@mui/material"
import { Link } from "react-router-dom"
import './style.css'

export  function DetailsPage({item, home}){
    return (
        <Container className=" details">
            <Card className="card-detail">
                <CardMedia 
                    component='img'
                    className="img-detail"
                    src={item.img || `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                />
                <CardContent className="content-detail">
                    <Typography variant='h4' className="header-detail">
                        {item.title || item.name}
                    </Typography>

                    {item.birthday && (
                        <Typography variant='p' className="text-detail" >
                                <span className="details-header">Birthday</span>  : {item.birthday} 
                        </Typography>
                    )}

                    {item.gender && (
                        <Typography variant='p' className="text-detail" > 
                            <span className="details-header">Gender</span>  : {item.gender ===2 ? "Male" : "Female"}
                        </Typography>
                    )}

                    {item.place_of_birth &&(
                        <Typography variant='p' className="text-detail" >
                            `<span className="details-header">place of birth</span>  : {item.place_of_birth}`
                        </Typography>
                    )}

                    {item.number_of_seasons && (
                        <Typography className="text-detail" variant='p' >
                            <span className="details-header">number of seasons</span> :
                            {item.number_of_seasons}
                        </Typography>
                    )}

                    {item.number_of_episodes && (
                        <Typography className="text-detail" variant='p' >
                            <span className="details-header">number of episodes</span> :
                            {item.number_of_episodes}
                        </Typography>
                    )}
                    
                    {item.genres  && (
                        <Typography className="text-detail" variant='p' >
                            <span className="details-header">genres : </span>
                            {item.genres.map((genre,index)=>(
                                <p style={{display:"inline-block"}} key={genre.id}> {genre.name} {(index !== item.production_companies.length-1)? ", " :" " }   </p>
                            ))}
                            
                        </Typography>
                    )}
                    
                    {   item.production_companies && (
                        <Typography className="text-detail" variant="p"  >
                            <span className="details-header">production companies : </span>
                            {item.production_companies.map((company, index)=>(
                                <p style={{display:"inline-block"}} key={company.id}>  {company.name} {(index !== item.production_companies.length-1)? ", " :" " }   </p>
                            ))}
                        </Typography>
                    )} 

                    {item.budget && ( 
                        <Typography variant='p' className="text-detail" style={{display:"block"}}>
                            <span className="details-header">budget</span> : {item.budget} $
                        </Typography>
                    )}


                    {item.vote_average && (
                        <Typography className="text-detail" variant='p' >
                                <span className="details-header">Rating</span>  : {item.vote_average}
                        </Typography>
                    )}

                    <div className="btns">
                        <div>
                        <Link to={home} className="link" >
                            <Button >Back</Button> 
                        </Link> 
                        {
                        item.homepage?     
                        <Link className="link" to={item.homepage}>
                            <Button >Go TO Movie Page</Button> 
                        </Link>  
                        :""
                        }      
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Container>
    )
}