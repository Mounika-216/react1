import React,{useState} from "react";
import './App.css';
import Header from "./Header";
import AddConatct from "./AddConatct";
import ContactList from "./ContactList";
function App() {
  const [contacts ,setContacts ] = useState([]);
   const addContactHandler = (contact) =>{
// as i need to push the contacts that were entered into contacts we use spread operator
     setContacts([...contacts , contact]);
   };
  // these contacts can be used in another components by passing props that is var={array} place in the component where to be usw
  return (
    <div className="ui container">
      <Header/>
      <AddConatct addContactHandler = {addContactHandler } />
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
