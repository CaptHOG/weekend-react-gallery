function GalleryList({galleryItems}) {
  console.log(galleryItems); // why is this undefined?
  return (
    <section>
      {galleryItems.map(item => (
        <img src={item.path} key={item.id}/>
      ))}
    </section>
  )
}

export default GalleryList;