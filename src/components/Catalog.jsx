import { useSelector } from "react-redux"
import CamperCard from "./CamperCard"
import { ClipLoader } from "react-spinners"
import styles from '../styles/Catalog.module.css'

function Catalog() {
  const { items, loading, page } = useSelector(state => state.campers)
// console.log('items:', items)

  const displayedItems = items.slice(1, page * 6)

  if (loading && items.length === 0) {
    return (
      <div className={styles.loadingContainer}>
        <ClipLoader color="#000000" size={50} />
      </div>
    )
  }

  if (displayedItems.length === 0) {
    return (
      <div className={styles.noResults}>
        <p>Couldn't find any results</p>
      </div>
    )
  }

  return (
    <div className={styles.campersGrid}>
      {displayedItems.map(camper => (
        
        <CamperCard key={camper.id} camper={camper} />
      ))}
      
    </div>
    
  )
  
}


export default Catalog
