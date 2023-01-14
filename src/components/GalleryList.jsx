import GalleryItem from "./GalleryItem";

                        
function GalleryList({galleryItems, getItems}) {
  console.log('props.galleryItems:', galleryItems);
  return (
    <section className="main">
      {galleryItems.map((item) => (
        <GalleryItem item={item} key={item.id} getItems={getItems}/>
      ))}
    </section>
  )
}


export default GalleryList;