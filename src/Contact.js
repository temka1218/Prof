import './Contact.css'
import { Container } from "react-bootstrap"
import {db} from './firebase';
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Таны хүсэлт илгээгдлээ :)");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
   
     <form className="form" onSubmit={handleSubmit}>
      <h1>Холбоо барих </h1>

      <label>Нэр</label>
      <input
        placeholder="Хувь хүн, Байгууллагын нэрээ оруулна уу"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Цахим хаяг аа оруулна уу"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Агуулга</label>
      <textarea
        placeholder="Санал хүсэлтээ бичнэ үү"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Илгээх
      </button>
    </form>
  
      
 
  );
};

export default Contact;