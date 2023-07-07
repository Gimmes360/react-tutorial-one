import { useNavigate } from "react-router-dom";

const Test= () => {

const navigate=useNavigate();
const clickEvent=(()=>{
navigate(-2)
});



    return ( 
        <div>

<button className="btn btn-primary" onClick={clickEvent}>Back</button>


        </div>
     );
}
 
export default Test;