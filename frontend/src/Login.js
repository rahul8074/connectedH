import React,{useState} from 'react';
import axios  from 'axios';
import {useHistory} from 'react-router-dom';
 
const Login = () => {
    
    let history = useHistory();
    const [user,setUser] =useState({
        email:"",
        password:"",
        
    });

    const {email,password } =user;
    const onInputChange = e => {
        setUser({...user,[e.target.name] : e.target.value})
    }

    

        const onSubmit = async(e) => {
            e.preventDefault();
            console.log(user)
            await axios.post("http://localhost:4000/login",user)
                .then(response =>{
                    // console.log("login information is sent  to the server")
                    // console.log(response)
                   
                    
                    
                    if(response.data.user){
                        
                        //set username to local storage
                        window.localStorage.setItem('user',response.data.user)
                        
                        history.push('/records');
                         
                       
                    }
                   
                })
                .catch(error => {
                    console.log(error)
                    console.log("error in login sending to server")
                })
             
         
         
    }




    return(
        <>
        <h1>Welcome to ConnectedH</h1>
        <div   >
            <div className="container-fluid  " style={{border:'1px solid' ,width:'400px',lineHeight:0.9,borderRadius:'10px',padding:'10px',color:'gray',boxShadow:'1px 0px 19px 1px'}}>
            <form  onSubmit={e =>onSubmit(e)}  >
                    
         
            <div className="form-group"  style={{color:'black'}} >
                
               Email <div className="input-container" style={{margin:'10px'}}>
                 
                <input className="form-control " 
                type="email" 
                placeholder="Enter Your E-mail Address" 
                name="email"
                value={email}
                onChange = {e =>onInputChange(e)}
                />
                </div>
            </div>
            <br></br>

            <div className="form-group" style={{color:'black'}}>
              Password
                <div className="input-container" style={{margin:'10px'}}>
                 
                <input  className="form-control "
                type="password" 
                placeholder="Enter Your Password" 
                name="password" 
                value={password}
                onChange = {e =>onInputChange(e)}
                />
                
                </div>
            </div>

            {/* image */}
     

            <hr style={{height:"1px",backgroundColor:"black",width:"100%",opacity:"0.3",borderRadius:"10px"}}/>
             <button className=" btn btn-success" style={{marginBottom:"10px"}} type="submit">Login</button>
             
            </form>
            </div>
        </div>
        </>
    )
}

export default Login;