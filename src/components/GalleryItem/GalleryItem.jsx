import {useState} from 'react';


function GalleryItem({item}) {
  const [showDescription, setShowDescription] = useState(false);
  const [likeCounter, setLikeCounter] = useState(0);

  // image/description click handle
  const toggleshowDescription = () => {
    setShowDescription(!showDescription);
  }

  // like button handler
  const clickLikeButton = () => {
    setLikeCounter(likeCounter + 1);
  }

  if (showDescription) {
    return (
      <>
        <div className='animalCard' onClick={toggleshowDescription}>
          <div className='descriptionDiv'>
            <p>{item.description}</p>
          </div>
          <p>Likes: {likeCounter}</p>
          <button onClick={clickLikeButton}>Like</button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='animalCard'>
          <img src={item.path} key={item.id} onClick={toggleshowDescription}/>
          <p>Likes: {likeCounter}</p>
          <button onClick={clickLikeButton}>Like</button>
        </div>
      </>
    )
  }
}


export default GalleryItem;