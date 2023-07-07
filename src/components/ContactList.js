const ContactList = ({title,emails,addObj,techLists,removeTechs}) => {
    return (  
        <div style={{textAlign:'center'}}>
            <h1>{title}</h1>
            <h2>Email: {emails}</h2>
            <h3>{addObj.addressObj1}</h3>
            <h3>{addObj.addressObj2}</h3>

            <div>
                <h3>Technology List</h3>
                {
                    techLists.map((item)=>
                        <div key={item} style={{border:'1px solid black', margin:'30px'}}>
                            <h3>Tech id is {item.id } </h3>
                            <h3>Tech name is {item.name} </h3>
                            <h3>Tech version is {item.version } </h3>
<button onClick={()=>removeTechs(item.id)} className="btn btn-primary">Remove</button>
                        </div>     
                    )
                }
            </div>

        </div>





    );
}
 
export default ContactList;