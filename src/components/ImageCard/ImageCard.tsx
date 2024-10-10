
import styles from './ImageCard.module.css'
import { Image } from '../App/App.types'; 

type ImageCardProps ={
  image: Image;
  onClick: () => void; 
}

function ImageCard({ image, onClick }:ImageCardProps)  {
  return (
    <div className={styles.ImageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClick}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
