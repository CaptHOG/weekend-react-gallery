import Axios from 'axios';
import {useState} from 'react';


function GalleryItem({item, getItems}) {
  const [showDescription, setShowDescription] = useState(false);
  const [likeCounter, setLikeCounter] = useState(0);

  // image/description click handle
  const toggleshowDescription = () => {
    setShowDescription(!showDescription);
  }

  // Like button handler
  const handleLikeButtonClick = (event) => {
    let likeButtonId = event.target.id

    // PUT
    Axios.put(`/gallery/like/${likeButtonId}`, {likes: likeCounter})
      .then((response) => {
        getItems();
      })
      .catch((error) => {
        console.log('Error PUT client', error);
      })
    console.log('event.target:', event.target);
    setLikeCounter(likeCounter);
  }

  console.log(`item.likes for id ${item.id}:`, item.likes);

  // conditional render description or image
  if (showDescription) {
    return (
      <>
        <div className='animalCard' onClick={toggleshowDescription}>
          <div className='descriptionDiv'>
            <p>{item.description}</p>
          </div>
          <p>Likes: {item.likes}</p>
          <button id={item.id} onClick={handleLikeButtonClick}>Like</button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='animalCard'>
          <img src={item.path} key={item.id} onClick={toggleshowDescription}/>
          <p>Likes: {item.likes}</p>
          <button id={item.id} onClick={handleLikeButtonClick}>Like</button>
        </div>
      </>
    )
  }
}


export default GalleryItem;