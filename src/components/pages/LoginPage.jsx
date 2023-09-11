import { useState } from "react";

function LoginPage() {

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

    // affichage
    return (
        <div>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input value={prenom} onChange={handleChange} type="text" required="required" placeholder="Entrez votre prénom..." />
                <button>Accéder à votre espace</button>
            </form>
        </div>
    );
}

export default LoginPage;