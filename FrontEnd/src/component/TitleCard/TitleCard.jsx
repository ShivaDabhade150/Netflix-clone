import './TitleCard.css'
import Card_data from '../../assets/cards/Cards_data.js'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export const TitleCard = ({title, category})=>{

       const [useAPI,setUseAPI] = useState([])
       const options = {
          method: 'GET',
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mzg5NmI5MmIyZTVjMDg2ZDZiOTliNDkwOTQ4ZTg3YyIsIm5iZiI6MTc2OTI0NDUxMC4xMzkwMDAyLCJzdWIiOiI2OTc0ODc1ZTBlMTZmMzRhYjgxMDVjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._vLhydKPP2hjhYiTOohtO36715mOWWJL8kBFjtCk4Wc'
         }
         };

         useEffect(()=>{

             fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
             .then(res => res.json())
             .then(res => setUseAPI(res.results))
             .catch(err => console.error(err));
             
             
             
         },[])

   

    return(
    <>
      <div className="Title-Card">
        <h1>{title?title:"Popular on NetFlix"}</h1>
        <div className="card-data"> 
           {
              useAPI.map(card=>{
                 return <Link className="card-list" to={`/Player/${card.id}`}>
                            <img src={"https://image.tmdb.org/t/p/original"+card.backdrop_path}></img>
                            <p>{card.original_title}</p>
                        </Link>
              })
           }
        </div>
      </div>
      
    </>)
}

