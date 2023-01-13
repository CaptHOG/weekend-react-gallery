import {useEffect, useState} from 'react';
import React from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  let [galleryItems, setGalleryItems] = useState([]);

  // When the DOM loads get the data
  useEffect(() => {
    getItems();
  }, [])

  // GET
  const getItems = () => {
    Axios.get('/gallery')
      .then(response => {
        console.log(response.data);
        setGalleryItems(response.data);
      })
      .catch(error => {
        console.log('Error GET client:', error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg"/>
    </div>
  );
}

export default App;
