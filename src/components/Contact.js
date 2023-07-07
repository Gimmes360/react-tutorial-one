import ContactList from "./ContactList";

const Contact = () => {

  const removeTech=(id)=>{
    console.log(id)
  }
  let email="abrahammohd@gmail.com";
  let addressObj={addressObj1:"kuntau", addressObj2:"dorayi"}
  let techList=[{id:1,name:"React", version:18.2},{id:2,name:"Angular", version:15},{id:3,name:"Dotnet", version:6}]
    return (
        <div>
          <ContactList title="welcome to contact page" emails={email} addObj={addressObj} techLists={techList} removeTechs={removeTech}></ContactList>
        </div>
      );
}
 
export default Contact;