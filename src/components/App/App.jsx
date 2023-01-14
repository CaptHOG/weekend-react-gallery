import {useEffect, useState} from 'react';
import React from 'react';
import './App.css';
import Axios from 'axios';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  let [galleryItems, setGalleryItems] = useState([]);

  // When the DOM loads get the data
  useEffect(() => {
    getItems();
  }, [])

  // GET
  const getItems = () => {
    console.log('getItems');

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
      <Header />
      <p>Gallery goes here</p>
      <GalleryList galleryItems={galleryItems} />
    </div>
  );
}

export default App;
