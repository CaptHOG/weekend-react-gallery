import {useState} from 'react';


function GalleryItem({item}) {
  const [showDescription, setShowDescription] = useState(false);

  // click handle
  const toggleshowDescription = () => {
    setShowDescription(!showDescription);
  }

  if (showDescription) {
    return (
      <>
        <div className='animalCard' onClick={toggleshowDescription}>
          <div className='descriptionDiv'>
            <p>{item.description}</p>
          </div>
          <p>Likes: 0</p>
          <button>Like</button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='animalCard'>
          <img src={item.path} key={item.id} onClick={toggleshowDescription}/>
          <p>Likes: 0</p>
          <button>Like</button>
        </div>
      </>
    )
  }
}


export default GalleryItem;