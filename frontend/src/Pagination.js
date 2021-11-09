import React,{useState,useEffect} from 'react';

const Pagination = ({showPerPage,onPaginationChange}) =>{

    const [counter,setCounter] = useState(1);
    useEffect(()=>{
        const value = showPerPage*counter;
        console.log('start:',value-showPerPage)
        console.log('end: ',value)
        onPaginationChange(value-showPerPage,value); //calling function in records
    },[counter]);


    console.log(showPerPage)
    return(
        <div>

        <button className="btn btn-danger"
            style={{width:'100px'}}
            onClick = {()=>setCounter(counter-1)} >
            Previous
        </button>

        <button className="btn btn-danger"
            style={{width:'100px',marginLeft:'100px'}} 
            onClick ={()=>setCounter(counter+1)}>  
            Next
        </button>
        
        </div>
    )
}

export default Pagination;