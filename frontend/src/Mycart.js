import React,{useState,useEffect} from "react";

const MyCart =()=>{

    
 //pagination
 const[currenPage,setCurrentPage]=useState(1);
 const[postPerPage,setPostPerPage]=useState(3);

 const indexOfLastPage = currenPage*postPerPage;
 const indexOfFirstPage = indexOfLastPage-postPerPage;

 let loginUser= window.localStorage.getItem("user");
 var  items =(window.localStorage.getItem(`${loginUser}`));
 
 console.log("items=>"+items);
 
 var arr = items.split("@");

 
 const Inc =(a,b)=>{
    alert(a,b)
 }


 const Printing= (data,key)=>{
    if(key>=0){
     if(key%3==0 && data ){
         if(data.charAt(0)==","){
             data=data.slice(1)
         }
         
         return(
             <p className="item">
               
                 <img src={data}  style={{width:"100px",height:"100px"}}/>
                 </p>
         )

     }
     else{
         return(
            <p className="item"> 
                 <p>{data.split(",")}</p>
             </p>
         )
     }
    }
 }

 
    return(
        <>
        <a href="/records">Back to Products</a>
        <center>My Cart</center>
        {
            <div style={{border:'1px solid gray',paddingBottom:'-100px'}}>
                
                    {    
                        arr.map((index,key)=>(

                            
                               <p>{Printing(index,key)}</p>
                             
                            
                           
                        ))
                       
                    }
             
            </div>
        }

<br></br>
 
 <div>
     

     {/* //pagination because of less time sorry for this */}
  <div class="pagination">
  <a href=" # sorry underwork">&laquo;</a>
  <a href="# sorry under work"  >1  </a  >
  <a href="#"  >2  </a  >
  <a href="#"  >3  </a  >
  <a href="#"  >4</a  >
  <a href="#"  >5</a  >
  <a href="#"  >6</a>
  <a href="#">&raquo;</a>
</div>  
 </div>
    
    
        </>
    )}
 
export default MyCart;