
import './NavBar.css'
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import {useRef,useEffect} from "react"
import {useNavigate} from 'react-router-dom'
export const NavBar = () =>{
    const navigate = useNavigate()
    const scrollRef = useRef()
    useEffect(()=>{

         window.addEventListener('scroll',()=>{

            if(window.scrollY > 80)
            {
                scrollRef.current.classList.add('nav-dark')
            }else{
                scrollRef.current.classList.remove('nav-dark')
            }
         })
    },[])

    const handleSignOut=(e)=>{
      
      navigate('/login')
    }

    return(
        <>
            <div className='NavBar' ref={scrollRef}>
              <div className='NavBar-left'>
                 <img src={logo} alt=""></img>
                 <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Language</li>
                 </ul>
              </div>
              <div className='NavBar-right'>
                <img src={search_icon} alt="" className="icon"></img>
                <p>children</p>
                <img src={bell_icon} alt="" className="icon"></img>
                <div className="navbar-profile">
                    <img src={profile_img} alt="" className="profile"></img>
                    <img src={caret_icon} alt=""></img>
                    <div className="dropdown">
                        <p onClick={handleSignOut}>sign out of Netflix</p>
                    </div>
                </div>

              </div>
            </div>
        </>
    )
}