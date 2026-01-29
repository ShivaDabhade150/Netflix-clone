
const express =  require('express')
const app = express();
const cors = require('cors')
const db = require('./db')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const port = 5000;







app.post('/Register',(req,res)=>{
   const { name, email, password } = req.body;

  
     
     const insert = "insert into users(name,email,password) values(?,?,?)"
     const data = [name,email,password]
     db.query(insert,data,(error,result)=>{
        if(error)
        {
            console.log(error)
        }
        else{
            
         console.log(result)
         res.status(200).json({
                                success:true,
                                message:'Register successfully !'
         });
        }
     })
     
   })


app.post('/login',(req,res)=>{

    const {email,password} = req.body;
    console.log('in side login')
    const command = 'select * from users where email= ?'
    const value  = `${email}`;

    
    console.log(value)
    db.query(command,value,(error,result,fields)=>{

      
      if(error || result.length == 0)
      {
         
         console.log(error)
         res.status(401).json({success :false,
                               message:'incorrect email !'})
      }
      else {

         if(password === result[0].password)
         {
            res.status(200).json({success:true,
                                  message:'login successfull !'
            })
         }
         else{
            res.status(401).json({
                                   success:false,
                                   message:'incorrect password !'
            })
         }
      }

    })
})

   
   

//    db.close();

app.listen(port,()=>{
    console.log(`Running on${port}`)
})