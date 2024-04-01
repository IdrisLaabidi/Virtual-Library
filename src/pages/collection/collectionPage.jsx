import React from 'react';
import {useState } from 'react';


const Collection = () => {
  
  const [collectionTitle, setCollectionTitle] = React.useState('');

  
  const handleTitleChange = (e) => {
    setCollectionTitle(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Collection title submitted:', collectionTitle);
  };

  return (
    <div>
      <h2>Ajouter une collection</h2>
      
      <form onSubmit={handleSubmit} /*className={styles.form-container}*/>
        <label htmlFor="collectionTitle" /*className={styles.h2}*/>Titre de la collection: </label>
        <input
          type="text"
          id="collectionTitle"
          placeholder="titre de la collection"
          value={collectionTitle}
          onChange={handleTitleChange}
        />
        <p>Limite de 40 caractères. Par exemple : (Mes livres, cassette de souhaits de films, jeux de console, collection de CD de famille).</p>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default Collection;
