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
        <div>
          <button>Like</button>
          <p>Likes: 0</p>
        </div>
        <div className='animalCard' onClick={toggleshowDescription}>
          <p>{item.description}</p>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='animalCard' onClick={toggleshowDescription}>
          <div>
            <img src={item.path} key={item.id}/>
            <button>Like</button>
            <p>Likes: 0</p>
          </div>
        </div>
      </>
    )
  }
}


export default GalleryItem;