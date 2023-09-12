import React, { useState } from 'react'

export default function LoginForm() {
     // state
     const [prenom, setPrenom] = useState("");
     
     //comportements
     const handleSubmit = (event) => {
         event.preventDefault();
         alert(`Bienvenue ${prenom}`);
         setPrenom("");
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
            <input value={prenom} onChange={handleChange} type="text" required="required" placeholder="Entrez votre prénom..." />
            <button>Accéder à votre espace</button>
        </form>
  )
}
