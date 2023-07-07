import { Link } from "react-router-dom";
const AppHeader = () => {
    return ( 
        <div className="App-header">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
     <Link to="/customer">Customer</Link>
     <Link to="/test">Test</Link>
               </div>
     );
}
 
export default AppHeader; 