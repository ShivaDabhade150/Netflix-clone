import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {useNavigate,useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'

export const Player = ()=>{
    const navigate = useNavigate()
    const {id} = useParams()
    const [ApiData,setApiData] = useState([])
    
          const options = {
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mzg5NmI5MmIyZTVjMDg2ZDZiOTliNDkwOTQ4ZTg3YyIsIm5iZiI6MTc2OTI0NDUxMC4xMzkwMDAyLCJzdWIiOiI2OTc0ODc1ZTBlMTZmMzRhYjgxMDVjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._vLhydKPP2hjhYiTOohtO36715mOWWJL8kBFjtCk4Wc'
         }
         };

    useEffect(()=>{
  


       fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
       .then(res => res.json())
       .then(res => setApiData(res.results[0]))
       .catch(err => console.error(err));

    },[])
    return(<>
       <div className="Player">
        
            <img src={back_arrow_icon} onClick={()=>{navigate('/')}}></img>
            <iframe src={`https://www.youtube.com/embed/${ApiData.key}`} title="YouTub" allowFullScreen width="90%" height="90vh"></iframe>
        
        <div className="Player-data">
        <p>{ApiData?.published_at?.split('T')[0]}</p>
        <p>{ApiData.name}</p>
        <p>{ApiData.type}</p>
        </div>
       </div>
    </>)
}