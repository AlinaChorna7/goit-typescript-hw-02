
import  styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import {Image} from '../App/App.types'

type ImageGalleryProps = {
  images: Image[];
  onImageClick: (image: Image) => void;
};



export default function ImageGallery({ images, onImageClick }:ImageGalleryProps) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.ImageGalleryItem}>
          
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}