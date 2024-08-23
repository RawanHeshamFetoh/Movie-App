import { AppBar,Toolbar, Button ,Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                    Movie App
                </Typography>
                <Button component={Link} to="/" color="inherit">Movies</Button>
                <Button component={Link} to="series" color="inherit">Series</Button>
                <Button component={Link} to="tvShows" color="inherit">TvShows</Button>
                <Button component={Link} to="actors" color="inherit">actors</Button>
            </Toolbar>
        </AppBar>
    )
}