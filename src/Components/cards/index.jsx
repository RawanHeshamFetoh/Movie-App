import { Card as MUICard , CardContent, CardMedia , Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function  Card({item , type}){
    return (
        <Link to={`/${type}/${item.id}`} style={{textDecoration:"none"}}>
        <MUICard >
            <CardMedia 
                component='img'
                height="450px"
                
                // src={ `https://image.tmdb.org/t/p/w500${item.poster_path}`||`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                src={item.image||`https://image.tmdb.org/t/p/w500${item.poster_path}` }
            />
            <CardContent >
                <Typography gutterBottom variant="h5"   component='div'>
                    {item.title? "Title" : "Name"} : {item.title || item.name}
                </Typography>
                
                <Typography variant="body2" color="text.secondry">
                    {
                        item.vote_average ? `vote :${item.vote_average}` :""
                    }
                    {/* vote :{item.vote_average} */}
                </Typography>
            </CardContent>
        </MUICard>
                </Link>
    )
}