import React, {useState} from 'react';
import"../app.css";
import {db} from '../firebase';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loaded,setLoaded] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoaded(true);
        db.collection('contacts')
        
        .add({
            name: name,
            email: email,
            message: message,
        })

        .then(()=> {
            alert("Your message has been successfully sent.");
            setLoaded(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoaded(false);
        });

        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Us:</h1>

            <label> Name: </label>
            <input placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <label> Email: </label>      
            <input placeholder="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />

            <label> Message: </label>
            <textarea placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" 
            style={{background : loaded ? "#ccc": "#ab5c91"}}>
                 Submit </button>
      </form>
    )
}
/* If loaded is true (handle event occurs),set bg faded, or else set it to default if not clicked on. rgb(2,2,110) */ 



export default Contact;
