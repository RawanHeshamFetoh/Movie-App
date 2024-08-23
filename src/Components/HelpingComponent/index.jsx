
import './style.css'
const HelpComponents  = ({srcimg , text,altText})=>{
    return(
        <div className='loading'>
            <h1>{text} </h1>
            <img src={srcimg} alt={altText} />
        </div>
    )
}
export default HelpComponents;