import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
     // state
     const [prenom, setPrenom] = useState("");
     const navigate = useNavigate();

     // comportements
     const handleSubmit = (event) => {
         event.preventDefault();
         setPrenom("");
         navigate(`order/${prenom}`);
     };
 
     const handleChange = (event) => {
         setPrenom(event.target.value);
     };

     // affichage (render)
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input required value={prenom} onChange={handleChange} type="text" placeholder="Entrez votre prénom..."  />
            <button>Accéder à votre espace</button>
        </form>
  )
}
