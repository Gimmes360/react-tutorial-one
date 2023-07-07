import { useEffect, useState } from "react";

const Home = () => {
    const HandleClick=()=>{
        // console.log(pageTitle);
        titleChange('react js');
      
    }
    // let pageTitle="react js tutorial"

    const[pageTitle,titleChange]=useState('react js tutorial')
    

    const obj={Name:"garba"}

    useEffect(()=>{
        console.log('use Effect Hook');
    });




    return ( 
        <div>
            <h3>{obj.Name}</h3>
  <h1>{pageTitle}</h1>
  <h2>{1+5}</h2> 
   <button onClick={HandleClick}>Click here</button>

        {/* <button onClick={()=>HandleClick("gimmes","30")}>Click here</button> */}
        </div> 
      
    );
}
 
export default Home;