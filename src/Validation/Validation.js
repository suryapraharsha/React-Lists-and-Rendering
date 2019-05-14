import React from 'react';


const Validation = (props) =>{
    if(props.length<=5){
        
    }

    return (
       <div className='Validation'>
           {
               props.length>5?
               <p>text too long!</p>
               :<p>text too short! </p>
           }
       </div>
        
    );
}

export default Validation;