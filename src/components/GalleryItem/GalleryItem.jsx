function GalleryItem({item}) {
  return (
    <img src={item.path} key={item.id}/>
  )
}

export default GalleryItem;