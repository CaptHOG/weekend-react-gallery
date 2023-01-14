import GalleryItem from "../GalleryItem/GalleryItem";

                        
function GalleryList({galleryItems}) { // props
  console.log(galleryItems); // props.galleryItems
  return (
    <section className="main">
      {galleryItems.map(item => (
        <GalleryItem item={item} key={item.id}/>
      ))}
    </section>
  )
}


export default GalleryList;