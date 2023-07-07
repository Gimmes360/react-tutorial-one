import { useEffect, useState } from "react";

const Customer = () => {


    const[custlist,Custupate]=useState([]);

useEffect(()=>{
    fetch('http://localhost:3000/customer').then(res=>{
        return res.json();
    }).then(resp=>{
        Custupate(resp);
    }).catch((err)=>{
console.log(err.message);
    });
},[])


    return ( 

        <div className="container">
            <h3 style={{textAlign:"center"}}>customer listing</h3>
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Area</td>
                        <td>Credit-list</td>
                        <td>Action</td>

                    </tr>

                </thead>
                <tbody>
                    {
                        custlist.map((item)=>{
                            <tr key={item}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.area}</td>
                                <td>{item.creditlimit}</td>
                                <td>
                                    <a className="btn btn-primary">Edit</a>
                                    <a className="btn btn-danger">Remove</a>
                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
            
        </div>
    
     );
}
 
export default Customer;