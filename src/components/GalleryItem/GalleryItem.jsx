import {useState} from 'react';


function GalleryItem({item}) {
  console.log(item);
  const [showDescription, setShowDescription] = useState(false);

  // click handle
  const toggleshowDescription = () => {
    setShowDescription(!showDescription);
  }

  if (showDescription) {
    return (
      <div className='animalCard' onClick={toggleshowDescription}>
        <p>{item.description}</p>
      </div>
    )
  } else {
    return (
      <div className='animalCard' onClick={toggleshowDescription}>
        <img src={item.path} key={item.id}/>
      </div>
    )
  }
  
}


export default GalleryItem;