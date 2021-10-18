import React,{useState,useEffect} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const Records = ()=>{
    let history = useHistory(); //use history
    const data = JSON.stringify(localStorage.getItem('user'))
    console.log(data)

    const [products,setProducts] = useState(['']);

//  load function whenever page refreshes 
 useEffect( () =>{
   loadProducts();  
  

 },[])
 
//data fetching from rest api which is sever i have created using express.js
 const loadProducts = async () => {
   const result = await axios.get("http://localhost:4000/products");
console.log(result)
   setProducts(result.data)


 }
const ItemAdded = (name)=>{
    alert(name+" added Successfully in your cart!")
}
 
let a=[]
 const addItemToCart=(img,name,price) =>{
    ItemAdded(name);

    a.push(img+"@")
  
    a.push(name+"@");
  
    a.push(price+"@");
    
  
    //set data with respect to user
 
    console.log("arr=>"+a);
   let loginUser= window.localStorage.getItem("user");
   window.localStorage.setItem(`${loginUser}`,a);

     
    console.log("my username"+window.localStorage.getItem(`${loginUser}`));

   
}



    return(
        <>

        {/* add to cart */}
        <div style={{backgroundColor:"#fff111",width:"100%",padding:'10px 10px'}}>
        <p style={{padding:'auto',marginRight:'5px',}}>Hi!  ~{localStorage.getItem('user').split('@')[0].toUpperCase()} </p>
        <div>
        <a className="btn btn-primary btn-lg" href="/mycart" >My Cart</a>
        <a href="/">Back to Login</a>
        </div>
        
       
            
        </div>


        
        <div style={{backgroundColor:"white",color:'black'}}>
            
               <div style={{margin:'10px',padding:'10px'}}>
                   <table style={{border:1}}>

                   {products.map((prod,key)=>(
                        <tr>
                            
                        
                            <td>
                                <img src={prod.imgUrl}  style={{width:"350px",height:"350px"}}/>
                                
                                
                                <p>{prod.name}</p>
                                <p style={{color:'black'}}>Price: ${prod.price}</p>
                                <button className="btn btn-primary" onClick={(img,name,price) =>addItemToCart(prod.imgUrl,prod.name,prod.price)}   >Add to Cart</button>
                                 
                            </td>
                            

                         
                        </tr>
                            ))}   

                  
                    </table>
                   
                   
                 
               </div>


        
        </div>
            
         </>
    )
}

export default Records;