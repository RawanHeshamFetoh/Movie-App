import axios from "axios";

const Base_Url = "https://api.themoviedb.org/3"
const API_KEY = "607f942283bb38ab33263ffad9ad07c8";


export async function fetchMovie(){
    try{
        const response = await axios.get(`${Base_Url}/movie/popular?api_key=${API_KEY}`)
        return response.data.results
    }catch(error){
        console.log('Error Fetch Movie' , error);
        throw error
        
    }
}

export async function fetchTvShows(){
    try{
        const response = await axios.get(`${Base_Url}/tv/popular?api_key=${API_KEY}`)
        return response.data.results
    }catch(error){
        console.log('Fetch TV Show' , error);
        throw error
    }
}

export async function fetchActors(){
    try{
        const response = await axios.get(`${Base_Url}/person/popular?api_key=${API_KEY}`)
        return response.data.results
    }catch(error){
        console.log('Fetch Actors' , error);
        throw error
        
    }
}

export async function fetchSeries(){
    try{
        const response = await axios.get(`${Base_Url}/tv/top_rated?api_key=${API_KEY}`)
        return response.data.results
    }catch(error){
        console.log('Fetch Series' , error);
        throw error
    }
}




export async function fetchMoiveDetails(id){
    try{
        // const response = await axios.get(`${Base_Url}/movie/${id}?api_key=${API_KEY}`)
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=607f942283bb38ab33263ffad9ad07c8`)
        // console.log(response)
        return response.data
    }catch(error){
        console.log('Fetch movie' , error);
        throw error
    }
}
export async function fetchTvShowDetails(id){
    try{
        const response = await axios.get(`${Base_Url}/tv/${id}?api_key=${API_KEY}`)
        console.log(response.data);
        return response.data
    }catch(error){
        console.log('Fetch TV Show' , error);
        throw error
    }
}
export async function fetchActorDetails(id){
    try{
        const response = await axios.get(`${Base_Url}/person/${id}?api_key=${API_KEY}`)
        return response.data
    }catch(error){
        console.log('Fetch TV Show' , error);
        throw error
    }
}
export async function fetchseriesDetails(id){
    try{
        const response = await axios.get(`${Base_Url}/tv/${id}?api_key=${API_KEY}`)
        return response.data
    }catch(error){
        console.log('Fetch series' , error);
        throw error
    }
}