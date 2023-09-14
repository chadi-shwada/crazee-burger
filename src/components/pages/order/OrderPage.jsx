import React from 'react'

export default function OrderPage() {

    const navigateToLogin = () => {
        window.location.href = "/";
    };
  return (
    <div>
        <h1>Bonjour</h1>
        <button onClick={navigateToLogin}>Retour</button>
    </div>
  )
}
