
import './Login.css'
import {useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import App from '../../App.jsx'
export function Login()
{
    const navigate = useNavigate()
    const [signState,setSignState] = useState('Sign In')
    
 const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:""
    })

    
     const handleChange = (e)=>{
       
       setFormData({
        ...formData,
        [e.target.name]:e.target.value
       })
     }



     const handleSubmit = async (e)=>{
        e.preventDefault()
        if(signState == 'Sign In')
        {
            
            if(formData.email === "" || formData.password==="")
            {
                toast.error('please fill all fields')
                return
            }
            
        }else{

            if(formData.email==="" || formData.email === "" || formData.password==="")
            {
               toast.error('please fill all fields')
               return
            }
        }

        try{
         const res =  await fetch(`http://localhost:5000/${signState=='Sign In'? 'login' :'Register'}`,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(formData)
        })

        const data = await res.json()
        console.log(data)
        if(data.success == true && data.message=='Register successfully !')
        {
            toast.success(data.message)
            setSignState('Sign In')
        }
        else if(data.success == true && data.message=='login successfull !'){
            toast.success(data.message)
            navigate('/')
        }
        else if(data.success== false )
        {
            toast.error(data.message)
        }
    }catch(err){
        console.error(err)
    }
        
     }
   

    return(
        <>
         <div className="Login-page">

           <div className="form-data">
            <h1>{signState}</h1>
            <form onSubmit={handleSubmit}>
                {signState==='Sign In'?'':<input placeholder="user name" type="text" id="user-name" name="name" onChange={(e)=>handleChange(e)}/>}
                <input placeholder="email" type="text" name="email" onChange={(e)=>handleChange(e)}/>
                <input placeholder="password" type = "password" name="password" onChange={(e)=>handleChange(e)}/>
                <button type="submit">{signState}</button>
                <div className="form-help">
                    <div className="form-help-checkbox">
                    <input type="checkbox" id="form-checkbox"/>
                    <label htmlFor="form-checkbox">Remember me</label>
                    </div>
                    <p>help me</p>
                </div>
            </form>

            <div className="form-switch">
             {
               signState === 'Sign In'?<p>New to Netflix <span onClick={()=>setSignState("Sign Up")}>Sign Up Now</span></p>:
               <p>Already have account <span onClick={()=>setSignState("Sign In")}> Sign In Now </span> </p>}
              
              
              
            </div>
           </div>
         </div>
        </>
    )
}