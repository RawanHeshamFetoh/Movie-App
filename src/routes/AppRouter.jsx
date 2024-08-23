import { BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import NavBar from "../Components/NavBar";
import { lazy, Suspense } from "react";
import {TvShowsPage} from "../Pages/TvShow";
import { MoviesPage } from "../Pages/Movies";
import { SeriesPage } from "../Pages/Series";
import { ActorsPage } from "../Pages/Actors";
import { TvShowDetailsPage } from "../Pages/TvShowDetailsPage";
import { MovieDetailsPage } from "../Pages/MoiveDetailsPage";
import { SeriesDetailsPage } from "../Pages/SeriesDetailsPage";
import { ActorDetailsPage } from "../Pages/ActorDetailsPage";
import HelpComponents from "../Components/HelpingComponent"
import ErrorImg from "../Assets/404 error with people holding the numbers-rafiki.svg"

export default function AppRouter(){
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route index element={<MoviesPage/>} />
                <Route path="movie/:id" element={<MovieDetailsPage/>} />
                <Route path="tvShows" element={<TvShowsPage/>} />
                <Route path="tvShows/:id" element={<TvShowDetailsPage/>} />
                <Route path="series" element={<SeriesPage/>} />
                <Route path="series/:id" element={<SeriesDetailsPage/>} />
                <Route path="actors" element={<ActorsPage/>} />
                <Route path="actors/:id" element={<ActorDetailsPage/>} />
                <Route path="*" element={<HelpComponents srcimg={ErrorImg} text={"error"} altText={"error img"}/>} />
            </Routes>
        </Router>
    )
}