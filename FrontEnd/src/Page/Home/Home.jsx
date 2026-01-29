import './Home.css'
import "../../component/TitleCard/TitleCard.css"
import {NavBar} from "../../component/NavBar/NavBar.jsx"
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import info_icon from "../../assets/info_icon.png"
import play_icon from "../../assets/play_icon.png"
import {TitleCard} from "../../component/TitleCard/TitleCard.jsx"
import { Footer } from "../../component/Footer/Footer.jsx"

export const Home = ()=>{

    return(
        <>
           <div className="Home">
            <NavBar/>
            <div className="hero">
                <img src={hero_banner} className="banner-img"></img>
                <div className="hero-caption">
                    <img src={hero_title} className="caption-img"></img>
                    <p>Discovering his ties to a secret ancient order, 
                        a young man living in modern Istanb embarks on a 
                        quest to save the city from an immortal enemy.</p>
                     <div className="hero_btn">
                       <button className="btn"><img src={play_icon} alt="play"></img>Play</button>
                       <button className="btn barkbtn"><img src={info_icon} alt="info"></img>More info</button>
                     </div> 
                     <TitleCard/>
                </div>
            </div>
            <div className="more-content">
            <TitleCard title={"Blockbuster Movies "} category={"popular"}/>
            <TitleCard title={"Only on Netflix"} category={"top_rated"}/>
            <TitleCard title={"Upcoming"} category={"upcoming"}/>
            <TitleCard title={"Top Pic for you"} category={"now_playing"}/>
            </div>
           </div>

           <Footer />
        </>
    )
}

