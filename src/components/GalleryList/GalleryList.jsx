import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryItems}) {
  console.log(galleryItems); // why is this undefined?
  return (
    <section>
      {galleryItems.map(item => (
        <GalleryItem item={item} key={item.id}/>
      ))}
    </section>
  )
}

export default GalleryList;