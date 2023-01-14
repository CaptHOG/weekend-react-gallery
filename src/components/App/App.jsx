import {useEffect, useState} from 'react';
import React from 'react';
import './App.css';
import Axios from 'axios';
import Header from '../Header';
import GalleryList from '../GalleryList';


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
        setGalleryItems(response.data);
      })
      .catch(error => {
        console.log('Error GET client:', error)
      })
  }

  return (
    <div className="App">
      <Header />
      <p>Click an image to view description</p>
      <GalleryList galleryItems={galleryItems} getItems={getItems}/>
    </div>
  );
}


export default App;